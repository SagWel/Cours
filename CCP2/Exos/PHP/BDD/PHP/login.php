<?php

session_start();

try {
    $pdo = new PDO('mysql:host=localhost;dbname=apprenants;charset=utf8', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

$erreur = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['user'];
    $pwd = $_POST['pwd'];

    $stmt = $pdo->prepare("SELECT * FROM clients WHERE user = ?");
    $stmt->execute([$user]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result && password_verify($pwd, $result['pwd'])) {

        $_SESSION['user_id'] = $result['id'];
        $_SESSION['user_nom'] = $result['user'];
        $_SESSION['role'] = (int)$result['auth'];

        header("location: liste_utilisateurs.php");
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
    <link rel="stylesheet" href="../CSS/login.css">
</head>

<body>

    <div class="login-card">
        <h1>Espace de Connexion</h1>

        <?php if ($erreur): ?>
            <div class="error-msg">
                <?php echo $erreur; ?>
            </div>
        <?php endif; ?>

        <form method="post">
            <div class="form-group">
                <label for="user">Nom d'utilisateur</label>
                <input type="text" name="user" placeholder="Ex: JeanDupont" required>
            </div>

            <div class="form-group">
                <label for="pwd">Mot de passe</label>
                <input type="password" name="pwd" placeholder="**********" required>
            </div>

            <button type="submit">Se connecter</button>

            <a class="link" href="../HTML/inscription.html">Nouvel utilisateur</a>
        </form>
    </div>

</body>

</html>