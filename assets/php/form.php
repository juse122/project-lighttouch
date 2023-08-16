<?php

// if (isset($_POST["submit"])) {
//     // This page should not be accessed directly. Need to submit the form.
//     echo "error; you need to submit the form!";
// };

$checkbox = "";
$first_name = $_POST["firstname"];
$last_name = $_POST["lastname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

if (isset($_POST["hairremoval"]) && $_POST["hairremoval"] === "True") {
    $checkbox .= "Dauerhafte Haarentfernung";
};

if (isset($_POST["cryolipolysis"]) && $_POST["cryolipolysis"] === "True") {
    if (empty($checkbox)) {
        $checkbox .= "Kryolipolyse";
    } else {
        $checkbox .= ", Kryolipolyse";
    };
};

// Validation
$error = "";

if (empty($email)) {
    $error .= "Fehler: E-Mail muss angegeben werden";
    echo json_encode($error);
};

if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email)) {
    $error .= "Fehler: Ungültiges E-Mail Format";
    echo json_encode($error);
};

if (empty($error)) {
    $email_from = "noreply@lighttouch-institut.de";
    $email_subject = "Neue Kontaktanfrage von $email";
    $email_body =
        "Eine neue Kontaktanfrage ist eingegangen:\n\n".
        "Vorname: $first_name\n".
        "Nachname: $last_name\n".
        "E-Mail: $email\n".
        "Telefonnummer: $phone\n\n".
        "Interessiert sich für: $checkbox\n\n".
        "Nachricht: \n$message";
    // $to = "info@lighttouch-institut.de";
    $to = "juse122de@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    // Send mail
    mail($to, $email_subject, $email_body, $headers);

    echo json_encode("Mail successfully sent");
};

?>

<!-- if (mail($to_email, $subject, $body, $headers)) {
   echo "Email successfully sent to $to_email...";
 } else {
   echo "Email sending failed...";
 } -->