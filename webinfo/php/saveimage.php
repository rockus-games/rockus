<?php
function objectToarray($data)
{
    $array = (array) $data;
    foreach ($array as $key => &$field) {
        if (is_object($field)) {
            $field = $this->objectToarray($field);
        }

    }
    return $array;
}

$incoming = objectToarray(json_decode(file_get_contents("php://input"))); // $_POST didn't work

$img = $incoming["image"];
$pass = $incoming["pass"];

if ($pass == "Markus152") {
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);

    $target = '../blackboard.png';
    echo $target;
    $success = file_put_contents($target, $data);
    // move_uploaded_file($_FILES['file']['tmp_name'], $target);
}
