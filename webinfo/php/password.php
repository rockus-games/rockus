<?php
    $a = $_POST["pass"];

    $myfile = fopen("../password.txt", "w");
    fwrite($myfile, $a);
    fclose($myfile);

    echo "Written";
?>