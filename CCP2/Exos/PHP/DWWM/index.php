<?php
session_start();

try {
    $pdo = new PDO('mysql:host=localhost;dbname=DWWM;charset=utf8', 'root', "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur :' . $e->getMessage());
}

$erreur = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST["user"];
    $pwd = $_POST["pwd"];

    $stmt = $pdo->prepare("SELECT * FROM membres WHERE name = ?");
    $stmt->execute([$user]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result  && password_verify($pwd, $result['pwd'])) {
        $_SESSION['user_id'] = $result['id'];
        $_SESSION['user_name'] = $result['name'];
        $_SESSION['user_img'] = $result['img'];
        $_SESSION['user_auth'] = $result['auth'];

        header('Location:liste_membres.php');
        exit();
    } else {
        $erreur = "nom d'utilisateur ou mot de passe incorrect.";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="login">
        <h1>Connexion</h1>

        <?php if ($erreur): ?>
            <div class="error">
                <?php echo $erreur; ?>
            </div>
        <?php endif ?>

        <form method="post">
            <div class="form-input">
                <label for="user">Nom d'utilisateur</label>
                <input type="text" name="user" placeholder="Ex : Joseph63" required>
            </div>

            <div class="form-input">
                <label for="pwd">Mot de passe</label>
                <input type="password" name="pwd" placeholder="********" required>
            </div>

            <button type="submit" class="login-btn">Se connecter</button>
        </form>

        <a href="./inscription.php" class="new-user-link">S'inscrire</a>
    </div>

</body>

</html>