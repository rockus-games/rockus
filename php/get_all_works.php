<?php
header("Content-Type: text/html; charset=utf-8");

$con = new mysqli("5.23.50.101:3306", "cd56981_users", "Alvard86");
// $con = new mysqli("localhost:3306", "cd56981_users", "Alvard86");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$query = "SELECT id, nickname FROM cd56981_users.user";
$result = $con->query($query);

$resultArray = array();

while ($row = $result->fetch_assoc()) {
    $id = $row["id"];

    $res = new stdClass();

    if (file_exists("../users/works/$id/home/")) {
        $home = scan_dir("../users/works/$id/home/");
        $res->home = $home;
    } else {
        $res->home = array();
    }
    if (file_exists("../users/works/$id/class/")) {
        $class = scan_dir("../users/works/$id/class/");
        $res->class = $class;
    } else {
        $res->class = array();
    }

    $res->nickname = $row["nickname"];
    $res->id = $id;

    $resultArray[] = $res;
}

echo json_encode($resultArray);

function scan_dir($dir)
{
    $ignored = array('.', '..', '.svn', '.htaccess');

    $files = array();
    foreach (scandir($dir) as $file) {
        if (in_array($file, $ignored)) {
            continue;
        }

        $files[$file] = filemtime($dir . '/' . $file);
    }

    arsort($files);
    $files = array_keys($files);

    return $files;
}
