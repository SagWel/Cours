<?php
session_start();

try {
    $pdo = new PDO('mysql:host=localhost;dbname=apprenants;charset=utf8', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id'])) {
    $id_up = (int)$_POST['id'];
    $user_up = $_POST['user'];
    $cp_up = $_POST['CP'];
    $auth_up = (int)$_POST['auth'];

    if ($_SESSION['role'] !== 1 && $_SESSION['user_id'] !== $id_up) {
        die("Accès refusé");
    }

    $sql = "UPDATE clients SET user = ?, CP = ?, auth = ? WHERE id = ?";
    $stmt = $pdo->prepare($sql);

    if ($stmt->execute([$user_up, $cp_up, $auth_up, $id_up])) {
        header("Location: liste_utilisateurs.php?msg=updated");
        exit();
    }
}

$id_aff = isset($_GET['id']) ? (int)$_GET['id'] : (isset($_POST['id']) ? (int)$_POST['id'] : 0);

if ($id_aff === 0) {
    header("Location: liste_utilisateurs.php");
    exit();
}

$stmt = $pdo->prepare("SELECT * FROM clients WHERE id = ?");
$stmt->execute([$id_aff]);
$user_data = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user_data) {
    die("Utilisateur introuvable.");
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier le Profil</title>
    <link rel="stylesheet" href="../CSS/modifier.css">
</head>

<body>

    <div class="container">
        <h1>
            Modifier le profil <span class="id-label">#<?php echo $user_data['id']; ?></span>
        </h1>

        <form action="modifier.php" method="post">
            <input type="hidden" name="id" value="<?php echo $user_data['id']; ?>">

            <div class="form-group">
                <label for="user">Nom d'utilisateur</label>
                <input type="text" name="user" value="<?php echo htmlspecialchars($user_data['user']); ?>" required>
            </div>

            <div class="form-group">
                <label for="CP">Code Postal</label>
                <input type="text" name="CP" value="<?php echo htmlspecialchars($user_data['CP']); ?>" required>
            </div>

            <?php if ($_SESSION['role'] == 1 && $_SESSION['user_id'] !== $user_data['id']) : ?>
                <div class="form-group">
                    <label for="auth">Rôle (Autorisation)</label>
                    <select name="auth">
                        <option value="0" <?php echo ($user_data['auth'] == 0) ? 'selected' : ''; ?>>Utilisateur</option>
                        <option value="1" <?php echo ($user_data['auth'] == 1) ? 'selected' : ''; ?>>Administrateur</option>
                    </select>
                </div>
            <?php endif ?>

            <div class="btn-group">
                <button type="submit">Enregistrer</button>
                <a href="./liste_utilisateurs.php" class="btn-cancel">Annuler</a>
            </div>
        </form>
    </div>

</body>

</html>