<?php
    $data = file_get_contents($_FILES['file']['tmp_name']);

    $target = '../uploads/'.$_FILES['file']['name'];
    echo $target;
    // move_uploaded_file( $_FILES['file']['tmp_name'], $target);
?>