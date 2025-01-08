<?php
$id = $_POST["id"];
if (!empty($_FILES["image"])) {
    $image = file_get_contents($_FILES['image']['tmp_name']);
}

if (!empty($_FILES["image"])) {
    $target = '../users/avatars/' . $id;
    echo $target . "\n";
    move_uploaded_file($_FILES['image']['tmp_name'], $target);
}
