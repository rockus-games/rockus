<?php
    $passFile = fopen("pass.txt", 'r');
    $pass = fgets($passFile);
    fclose($passFile);

    if($pass == $_POST['pass']) {
        $data = $_POST['data'];

        $fp = fopen("options.json", 'w');
        fwrite($fp, $data);
        fclose($fp);

        $fp = fopen("{$_POST['grade']}.json", 'w');
        fwrite($fp, '[
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" },
            { "name": "Имя", "surname": "Фамилия" }
        ]
        ');
        fclose($fp);

        echo('Data saved');
    } else {
        echo('Wrong password');
    }

    
?>