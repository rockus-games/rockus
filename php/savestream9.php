<?php

$id = $_POST["id"]; // $_POST didn't work

$myfile = fopen("./stream9.txt", "w");
fwrite($myfile, $id);
fclose($myfile);

echo "Written";
