<?php
include 'conection_be.php';  // Incluir archivo de conexión

// Recoger los datos del formulario
$full_name = $_POST['full_name'];
$email_address = $_POST['email_address'];
$username = $_POST['username'];
$password_hash = $_POST['password_hash'];

// Encriptar password_hash
$password_hash = password_hash($password_hash, PASSWORD_BCRYPT);

// Verificar si el correo electrónico ya está registrado en la base de datos
$query_verify_email = "SELECT * FROM users WHERE email_address = :email_address";
$stmt = $conn->prepare($query_verify_email);
$stmt->bindParam(':email_address', $email_address);
$stmt->execute();

if ($stmt->rowCount() > 0) {
    echo '
        <script>
            alert("Este correo ya está registrado, intenta con otro diferente");
            window.location = "../../main";
        </script>
    ';
    exit();
}

// Verificar si el nombre de usuario ya está registrado en la base de datos
$query_verify_username = "SELECT * FROM users WHERE username = :username";
$stmt = $conn->prepare($query_verify_username);
$stmt->bindParam(':username', $username);
$stmt->execute();

if ($stmt->rowCount() > 0) {
    echo '
        <script>
            alert("Este usuario ya está registrado, intenta con otro diferente");
            window.location = "../../main";
        </script>
    ';
    exit();
}

// Insertar el nuevo usuario en la base de datos
$query_insert = "INSERT INTO users (full_name, email_address, username, password_hash) 
                VALUES (:full_name, :email_address, :username, :password_hash)";
$stmt = $conn->prepare($query_insert);
$stmt->bindParam(':full_name', $full_name);
$stmt->bindParam(':email_address', $email_address);
$stmt->bindParam(':username', $username);
$stmt->bindParam(':password_hash', $password_hash);

if ($stmt->execute()) {
    echo '
        <script>
            alert("Usuario registrado exitosamente");
            window.location = "../../main";
        </script>
    ';
} else {
    echo '
        <script>
            alert("Inténtalo de nuevo, no se ha podido registrar");
            window.location = "../../main";
        </script>
    ';
}
?>