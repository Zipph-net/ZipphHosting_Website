<?php

    include 'conexion_be.php';

    $nombre_completo = $_POST['nombre_completo'];
    $email = $_POST['email'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    // Encriptar contrasena
    $contrasena = hash('sha512', $contrasena);

    $query = "INSERT INTO usuarios(nombre_completo, email, usuario, contrasena) 
              VALUES('$nombre_completo', '$email', '$usuario', '$contrasena')";

    // Verificar que el email no se repita en la base de datos
    $verificar_email = mysqli_query($conexion, "SELECT * FROM usuarios WHERE email='$email'");

    if (mysqli_num_rows($verificar_email) > 0) {
        echo '
            <script>
                alert("Este correo ya esta registrado, intenta con otro diferente");
                window.location = "../../main";
            </script>
        ';
        exit();
        mysqli_close($conexion);
    } 

    // Verificar que el usuario no se repita en la base de datos
    $verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$usuario'");

    if (mysqli_num_rows($verificar_usuario) > 0) {
        echo '
            <script>
                alert("Este usuario ya esta registrado, intenta con otro diferente");
                window.location = "../../main";
            </script>
        ';
        exit();
        mysqli_close($conexion);
    } 

    $ejecutar = mysqli_query($conexion, $query); 

    if ($ejecutar) {
        echo '
            <script>

                alert("Usuario registrado exitosamente");
                window.location = "../../main";
            </script>
        ';
    }
    else {
        echo '
            <script>

                alert("Intentalo de Nuevo, no se ha podido registrar");
                window.location = "../../main";
            </script>
        ';
    }

    mysqli_close($conexion);

?>