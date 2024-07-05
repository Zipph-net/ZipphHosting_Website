<?php 
    session_start();

    if (!isset($_SESSION['usuario'])) {
        echo '
            <script>
                alert("Por favor debes iniciar sesion");
                window.location = "../../main"
            </script>
        ';
        session_destroy();
        die();
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zipph.net | Inicio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    
    <header class="header">

        <div class="contenedor__barra">
                <!--<a href="" class="link_barra">
                    <img src="img/favicon.png" alt="favicon" class="logo_barra">
                </a>-->
    
                <div class="menu_barra">
                    <nav>
                        <ul>
                            <li><a href="#"></a></li> 
                            <li><a href="#">GameServer</a>
                                <ul>
                                    <li><a href="#">Minecraft</a></li>
                                    <li><a href="#">Rust</a></li>
                                    <li><a href="#">Arma 3</a></li>
                                    <li><a href="#">FiveM</a></li>
                                </ul>
                            </li>
                            <li><a href="#">TeamSpeak</a></li>
                            <li><a href="#">DedicatedServer</a></li>
                            <li><a href="#">WebHosting</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </nav> 
                </div>

                <div class="bienvenido_button">
                    <a href="#">Bienvenido!</a>
                        <ul>
                            <li><a href="#">Panel de Control</a></li>
                            <li><a href="#">Perfil</a></li>
                            <li><a href="#">Ajustes</a></li>
                            <li><a href="../php/cerrar_sesion.php">Cerrar Sesion</a></li>
                        </ul>
                </div>

                
        </div>

    </header>

    <main>

        <div class="contenedor__todo">

            <div class="contenedor__infosv">
                <div class="subcontenedor__infosv">
                    <article>
                        <h2>Pagina</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </article>
                    <article>
                        <h2>Pagina</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </article>
                    <article>
                        <h2>Pagina</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </article>
                    <article>
                        <h2>Pagina</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </article>
                    <article>
                        <h2>Pagina</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </article>
                    <article>
                        <h2>Pagina</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </article>
                    <article>
                        <h2>Pagina</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </article>
                    <article>
                        <h2>Pagina</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </article>
                    <article>
                        <h2>Pagina</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </article>
                </div>
            </div>

        </div>

        <div class="contenedor__ofertas">
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
        </div>

        <div class="contenedor__mas">
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
        </div>

    </main>

    <footer>
        <div class="contenedor__footer">
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
            <article>
                <h2>Pagina</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </article>
        </div>
    </footer>

    

</body>
</html>