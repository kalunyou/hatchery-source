<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = wordwrap($_POST['message'], 70);

    $to = "admin@hatcheryth.com";
    $subject = "$name × Hatchery";
    $header = "From: $name <contact@hatcheryth.com>\r\nReply-To: $name <$email>\r\n";
				
    if($message != '') {
        mail($to, $subject, $message, $header);
        echo "<script type='text/javascript'>alert('Thank you for contacting Hatchery, we will get back to you shortly'); window.location.assign('../');</script>";
    }
?>