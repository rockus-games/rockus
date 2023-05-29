<?php
    $pass = $_POST['pass'];

    if ($pass == "markus152") {
        $p = generateRandomString(3);
        $fp = fopen("pass.txt", 'w');
        fwrite($fp, $p);
        fclose($fp);
        echo($p); 
    } else {
        echo("false");
    }

    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
?>