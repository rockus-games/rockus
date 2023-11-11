<?php

$id = $_POST["id"]; // $_POST didn't work

$myfile = fopen("./stream8.txt", "w");
fwrite($myfile, $id);
fclose($myfile);

echo "Written";
