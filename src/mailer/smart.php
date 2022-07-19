<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once('phpmailer/PHPMailer.php');
require_once('phpmailer/SMTP.php');
require_once('phpmailer/Exception.php');

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'asfaltirovanie-moskva@yandex.ru';                 // Наш логин
$mail->Password = 'pmgtdaqlkybpgibj';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('asfaltirovanie-moskva@yandex.ru', 'ООО Асфальтирование под ключ');   // От кого письмо 
$mail->addAddress('asfaltirovanie-moskva@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные пользователя для заказа';
$mail->Body    = '
		Пользователь оставил данные: <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if ($mail->send()) {
	echo 'Письмо отправлено!';
	} else {
	echo 'Ошибка: ' . $mail->ErrorInfo;
	}
?>