<?php

    $email = $_POST["id-email"];
    $pass = $_POST["id-pass"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados Inseridos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
		<h1>Logo</h1>
		<nav>
			<ul>
				<li>
					<a href="#">Home</a>
				<li>
					<a href="#">Novidades</a>
				<li>
					<a href="#">FAQ</a>
				<li>
					<a href="#">Sobre</a>
			</ul>
		</nav>
	</header>
    <main>
        <?php
            echo 
            "
            <div 
            style='background-color: #d3d3d3;padding: 10px;width: 350px;'>
                <b>Email:</b> $email<br>
                <b>Senha:</b>$pass
            </div>";
        ?>
    </main>
</body>
</html>