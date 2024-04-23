<?php
header("Content-Type: text/html; charset=utf-8");

// $con = new mysqli("5.23.50.101:3306", "cd56981_users", "Alvard86");
$con = new mysqli("localhost:3306", "cd56981_users", "Alvard86");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$query = "SELECT DISTINCT grade FROM cd56981_users.user ORDER BY grade ASC, nickname ASC";
$result = $con->query($query);

$resultArray = new stdClass();

while ($row = $result->fetch_assoc()) {
    $gradeArray = array();

    $query = "SELECT id, nickname, grade FROM cd56981_users.user WHERE grade = \"$row[grade]\" ORDER BY grade ASC";
    $result_grade = $con->query($query);

    while ($row2 = $result_grade->fetch_assoc()) {
        $id = $row2["id"];

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

        $res->nickname = $row2["nickname"];
        $res->id = $id;
        $res->grade = $row2["grade"];

        $gradeArray[] = $res;
    }

    // echo json_encode($gradeArray);

    $resultArray->{$row["grade"]} = json_encode($gradeArray);
}

// while ($row = $result->fetch_assoc()) {
//     $id = $row["id"];

//     $res = new stdClass();

//     if (file_exists("../users/works/$id/home/")) {
//         $home = scan_dir("../users/works/$id/home/");
//         $res->home = $home;
//     } else {
//         $res->home = array();
//     }
//     if (file_exists("../users/works/$id/class/")) {
//         $class = scan_dir("../users/works/$id/class/");
//         $res->class = $class;
//     } else {
//         $res->class = array();
//     }

//     $res->nickname = $row["nickname"];
//     $res->id = $id;
//     $res->grade = $row["grade"];

//     $resultArray[] = $res;
// }

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
