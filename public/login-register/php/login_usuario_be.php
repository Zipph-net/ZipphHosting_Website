<?php
session_start();

// Incluir el archivo de conexión
include 'conection_be.php'; // Asegúrate de que la ruta sea correcta

// Configuración para mostrar errores durante el desarrollo (opcional)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Verificar que se haya enviado el formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los datos del formulario y limpiar posibles valores maliciosos
    $email_address = isset($_POST['email_address']) ? trim($_POST['email_address']) : '';
    $password_hash = isset($_POST['password_hash']) ? $_POST['password_hash'] : '';

    // Log de los datos recibidos
    error_log("Datos recibidos: Email: $email_address, Password: " . (empty($password_hash) ? "vacío" : "proporcionado"));

    // Validar que los campos no estén vacíos
    if (empty($email_address) || empty($password_hash)) {
        error_log("Campos vacíos. Email: $email_address, Password: $password_hash");
        echo '
            <script>
                alert("Por favor, completa todos los campos.");
                window.location = "/";
            </script>
        ';
        exit();
    }

    // Verificar que la conexión se haya establecido
    if (!$conn) {
        error_log("Error de conexión a la base de datos: " . $conn->errorInfo());
        die("Error de conexión: " . $conn->errorInfo());
    } else {
        error_log("Conexión a la base de datos exitosa.");
    }

    try {
        // Preparar la consulta para buscar el usuario por su correo electrónico
        $query = $conn->prepare("SELECT * FROM users WHERE email_address = :email_address");
        $query->bindParam(':email_address', $email_address, PDO::PARAM_STR);
        $query->execute();

        // Obtener el resultado de la consulta
        $user_db = $query->fetch(PDO::FETCH_ASSOC);

        // Log de la consulta
        if ($user_db) {
            error_log("Usuario encontrado: " . $user_db['username']);
        } else {
            error_log("Usuario no encontrado para el email: $email_address");
        }

        // Verificar si el usuario existe
        if ($user_db) {
            // Verificar si la contraseña ingresada coincide con el hash almacenado
            if (password_verify($password_hash, $user_db['password_hash'])) {
                // Iniciar sesión
                $_SESSION['username'] = $user_db['username']; // Puedes guardar más datos si es necesario
                error_log("Contraseña verificada correctamente para el usuario: " . $user_db['username']);

                // Redirigir a la página principal o a otra página
                header("Location: /"); // Asegúrate de que la ruta sea correcta
                exit();
            } else {
                error_log("Contraseña incorrecta para el usuario: $email_address");
                echo '
                    <script>
                        alert("Contraseña incorrecta");
                        window.location = "/";
                    </script>
                ';
            }
        } else {
            echo '
                <script>
                    alert("Usuario no encontrado");
                    window.location = "/";
                </script>
            ';
        }

    } catch (PDOException $e) {
        // Loguear el error para depuración
        error_log("Error al consultar la base de datos: " . $e->getMessage());
        echo '
            <script>
                alert("Hubo un error en el proceso de inicio de sesión. Intenta de nuevo.");
                window.location = "/";
            </script>
        ';
    }

    // Cerrar la conexión
    $conn = null;
}
?>