<?php
    $img = file_get_contents("php://input"); // $_POST didn't work
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);

    $target = '../blackboard2.png';
    echo $target;
    $success = file_put_contents($target, $data);
    // move_uploaded_file( $_FILES['file']['tmp_name'], $target);
?>