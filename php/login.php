<?php/*
header("Content-Type: text/html; charset=utf-8");
$email = $_POST["email"];
$pass = $_POST["pass"];

// $con = new mysqli("5.23.50.101:3306", "cd56981_users", "Alvard86");
$con = new mysqli("localhost:3306", "cd56981_users", "Alvard86");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
// echo "Connection successful\n";

$query = "SELECT email, grade, id, nickname FROM cd56981_users.user WHERE email = '$email' AND pass = '$pass'";
$result = $con->query($query);

$resultArray = array();

$row = $result->fetch_assoc();
$id = $row["id"];
$resultArray[] = $row;

while ($row = $result->fetch_assoc()) {
    $resultArray[] = $row;
}

$res = json_encode($resultArray);

echo $res;
