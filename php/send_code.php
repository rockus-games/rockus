<?php
use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$code = generateRandomString();
$email = $_POST["email"];
$nickname = $_POST["nickname"];

$mail->isSMTP();
$mail->Host = "ssl://smtp.timeweb.ru";
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
$mail->Username = 'service@rockus.su';
$mail->Password = 'alvard86';
$mail->SMTPSecure = 'ssl';
$mail->CharSet = "utf-8";

$mail->setFrom('service@rockus.su', 'Rockus.su');
$mail->addAddress($email, $nickname);
$mail->Subject = 'Регистрация в системе Rockus.su';

// $con = new mysqli("5.23.50.101:3306", "cd56981_users", "Alvard86");
$con = new mysqli("localhost:3306", "cd56981_users", "Alvard86");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
// echo "Connection successful\n";

$query = "SELECT * FROM cd56981_users.user WHERE email = '$email';";

$result = $con->query($query);

if ($result->num_rows > 0) {
    echo "errorПользователь с такой электронной почтой уже зарегистрирован";

} else {
    $query = "SELECT * FROM cd56981_users.code WHERE email = '$email';";

    $result = $con->query($query);
    if ($result->num_rows > 0) {
        $code = $result->fetch_assoc()["code"];
        $body = "Ваш код подтверждения: $code";
        $mail->msgHTML($body);
        $mail->send();
    } else {
        $query = "INSERT INTO cd56981_users.code (email, code) VALUES('$email', '$code');";

        if ($con->query($query) === true) {
            echo "New record created successfully.";
            $body = "Ваш код подтверждения: $code";
            $mail->msgHTML($body);
            $mail->send();
        } else {
            echo "error: " . $sql . "<br>" . $con->error;
        }
    }
}

$con->close();

function generateRandomString($length = 6)
{
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[random_int(0, $charactersLength - 1)];
    }
    return $randomString;
}
