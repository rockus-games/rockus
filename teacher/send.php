<?php
    $passFile = fopen("pass.txt", 'r');
    $pass = fgets($passFile);
    fclose($passFile);

    if($pass == $_POST['pass']) {
        $data = $_POST['data'];
        $fp = fopen("{$_POST['grade']}.json", 'w');
        fwrite($fp, $data);
        fclose($fp);
        
        echo('Data saved');
    } else {
        echo('Wrong password');
    }
    
?>