<?php
$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
//Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = '0';                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'ssl://smtp.mail.ru';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'greensailpark@mail.ru';                     //SMTP username
    $mail->Password   = 'vertex2021';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->CharSet = 'UTF-8';

    //Recipients
    $mail->setFrom('greensailpark@mail.ru', 'Денис');
    $mail->addAddress('commands2011@gmail.com');     //Add a recipient
    $mail->addAddress('commands2011@mail.ru');     //Add a recipient
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его(eё) телефон: ${userPhone}";
    if ($mail->send()){
     header('Location: thanks.html');
} else {
    echo "письмо не отправлено.есть ошибка {$mail->ErrorInfo}";
}
   
} catch (Exception $e) {}

