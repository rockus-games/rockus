<?php

$id = $_POST["id"];

if (!file_exists("../users/works/$id/home/")) {
    mkdir("../users/works/$id/home/", 0777, true);
}
if (!file_exists("../users/works/$id/class/")) {
    mkdir("../users/works/$id/class/", 0777, true);
}

$home = scan_dir("../users/works/$id/home/");
$class = scan_dir("../users/works/$id/class/");

$result = new stdClass();
$result->home = $home;
$result->class = $class;

$resJSON = json_encode($result);

echo $resJSON;

function scan_dir($dir)
{
    $ignored = array('.', '..', '.svn', '.htaccess');

    $files = array();
    foreach (scandir($dir) as $file) {
        if (in_array($file, $ignored)) {
            continue;
        }

        $files[$file] = filemtime($dir . '/' . $file);
    }

    arsort($files);
    $files = array_keys($files);

    return $files;
}
