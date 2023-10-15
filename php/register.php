<?php
header("Content-Type: text/html; charset=utf-8");

$nickname = $_POST["nickname"];
$grade = $_POST["grade"];
$email = $_POST["email"];
$pass = $_POST["pass"];
if (!empty($_FILES["image"])) {
    $image = file_get_contents($_FILES['image']['tmp_name']);
}
strtoupper($nickname);
echo $nickname;

$con = new mysqli("5.23.50.101:3306", "cd56981_users", "Alvard86");
// $con = new mysqli("localhost:3306","cd56981_users","Alvard86");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
echo "Connection successful\n";

$query = "SELECT * FROM cd56981_users.code WHERE email = '$email';";

$result = $con->query($query);
if ($result->num_rows > 0) {
    $code = $result->fetch_assoc()["code"];
    if ($code == $_POST["code"]) {
        $query = "INSERT INTO cd56981_users.user (nickname, grade, email, pass) VALUES('$nickname', '$grade', '$email', '$pass')";

        if ($con->query($query) === true) {
            $last_id = $con->insert_id;

            if (!empty($_FILES["image"])) {
                $target = '../users/avatars/' . $last_id;
                echo $target . "\n";
                move_uploaded_file($_FILES['image']['tmp_name'], $target);
            }

            echo "New record created successfully. Last inserted ID is: " . $last_id;
        } else {
            echo "Error: " . $sql . "<br>" . $con->error;
        }
    } else {
        die("Неправильный код");
    }
}

$con->close();
