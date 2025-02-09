<?php
use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$code = generateRandomString();
$email = "eduardtepanosyan@gmail.com";
$nickname = $_POST["login"];

$mail->isSMTP();
$mail->Host = "ssl://smtp.timeweb.ru";
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
$mail->Username = 'service@rockus.su';
$mail->Password = 'Markus152';
$mail->SMTPSecure = 'ssl';
$mail->CharSet = "utf-8";

$mail->setFrom('service@rockus.su', 'Rockus.su');
$mail->addAddress($email, $nickname);
$mail->Subject = 'Регистрация в системе Rockus.su';

// $con = new mysqli("5.23.50.101:3306", "cd56981_users", "Markus152");
$con = new mysqli("localhost:3306", "cd56981_users", "Markus152");
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
// echo "Connection successful\n";

$query = "SELECT * FROM cd56981_users.user WHERE nickname = '$nickname';";

$result = $con->query($query);

if ($result->num_rows <= 0) {
    echo "errorПользователь с такой электронной почтой не найден";

} else {
    $query = "SELECT * FROM cd56981_users.code WHERE nickname = '$nickname';";

    $result = $con->query($query);
    if ($result->num_rows > 0) {
        $code = $result->fetch_assoc()["code"];
        $body = "Код подтверждения для пользователя $nickname: $code";
        $mail->msgHTML($body);
        $mail->send();
    } else {
        $query = "INSERT INTO cd56981_users.code (nickname, code) VALUES('$nickname', '$code');";

        if ($con->query($query) === true) {
            echo "New record created successfully.";
            $body = "Код подтверждения для пользователя $nickname: $code";
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
