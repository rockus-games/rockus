<?php
    $myfile = fopen("../password.txt", "r");
    $p = fread($myfile, filesize("../password.txt"));
    fclose($myfile);

    $a = $_POST["pass"];

    echo ($a == $p) and ($p <> "0");

    if(($a == $p) and ($p <> "0")) {
        $myfile = fopen("../password.txt", "w");
        fwrite($myfile, "0");
        fclose($myfile);
    }
?>
