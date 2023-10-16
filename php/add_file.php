<?php

$id = $_POST["id"];
$folder = $_POST["folder"];
if (!empty($_FILES["file"])) {
    $file = file_get_contents($_FILES['file']['tmp_name']);

    $target = "../users/works/$id/$folder/" . $_FILES['file']['name'];
    echo $target . "\n";
    move_uploaded_file($_FILES['file']['tmp_name'], $target);
}
