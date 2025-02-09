<?php
header("Content-Type: text/html; charset=utf-8");

$nickname = $_POST["login"];
$pass = $_POST["pass"];

// $con = new mysqli("5.23.50.101:3306", "cd56981_users", "Markus152");
$con = new mysqli("localhost:3306", "cd56981_users", "Markus152");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
echo "Connection successful\n";

$query = "SELECT * FROM cd56981_users.code WHERE nickname = '$nickname';";

$result = $con->query($query);
if ($result->num_rows > 0) {
    $code = $result->fetch_assoc()["code"];
    if ($code == $_POST["code"]) {
        $query = "UPDATE cd56981_users.user SET pass = '$pass' WHERE nickname = '$nickname';";

        if ($con->query($query) === true) {
            echo "Record updated successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $con->error;
        }
    } else {
        die("Неправильный код");
    }
}

$con->close();
