<?php
    $pass = $_POST["pass"];
    echo($pass);

    if($pass == "1") {
        $myfile = fopen("../blackboard2.txt", "w");
        fwrite($myfile, $_POST['textfield']);
        fclose($myfile);

        $myfile = fopen("../blackboard2.txt", "r");
        echo fread($myfile, filesize("../blackboard2.txt"));
        fclose($myfile);
    }
    else {
        echo("Nope :)))))))");
    }
    
?>