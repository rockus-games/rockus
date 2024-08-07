<?php
$pass = $_POST["pass"];
echo ($pass);

if ($pass == "Markus152") {
    $myfile = fopen("../blackboard.txt", "w");
    fwrite($myfile, $_POST['textfield']);
    fclose($myfile);

    $myfile = fopen("../blackboard.txt", "r");
    echo fread($myfile, filesize("../blackboard.txt"));
    fclose($myfile);
} else {
    echo ("Nope :)))))))");
}
