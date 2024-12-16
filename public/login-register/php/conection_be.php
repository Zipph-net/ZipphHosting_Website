<?php
// Datos de conexión
$host = "localhost";
$dbname = "zipph_login_db";  // Nombre de la base de datos
$user = "root";  // Usuario de la base de datos
$password = "@Zipph2023_";  // Contraseña de la base de datos (ajustar si es necesario)

try {
    // Crear una instancia de PDO para la conexión con la base de datos MySQL
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    
    // Establecer el modo de error de PDO para excepciones
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    // En caso de error de conexión, muestra el mensaje de error
    echo "Error de conexión: " . $e->getMessage();
    die();
}
?>