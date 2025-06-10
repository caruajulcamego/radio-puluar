
<?php
error_reporting(0); // Oculta errores
ini_set("display_errors", 0);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["correo_electronico"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    $para = "caraujulcamegoronal@gmail.com";
    $asunto = "Nuevo mensaje desde la página web";
    $contenido = "Nombre: $nombre\nCorreo: $email\nMensaje:\n$mensaje";
    $headers = "From: $email";

    if (mail($para, $asunto, $contenido, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}
