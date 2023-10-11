<?php
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$fatherName = $_POST["fatherName"];
$tel = $_POST["tel"];
$email = $_POST["email"];
$image = $_POST["image"];

$con = new mysqli("localhost:3306","Rockus","gbolus21");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
  }
  echo "Connected successfully";

?>

