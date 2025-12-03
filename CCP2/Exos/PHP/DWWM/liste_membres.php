<?php
session_start();

try {
    $pdo = new PDO('mysql:host=localhost;dbname=DWWM;charset=utf8', 'root', "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur :' . $e->getMessage());
}

$sql = "SELECT * FROM membres ORDER BY id DESC";
$stmt = $pdo->query($sql);

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listes des membres</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="liste-membres">
        <h1>Liste des membres de la classe</h1>

        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>Utilisateurs</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <div class="navbar">
                        <div class="user-infos">
                            <div class="user-img" style="background-image: url('<?php echo htmlspecialchars($_SESSION['user_img']); ?>'); background-repeat: no-repeat; background-size: cover; background-position: center center;"></div>
                            <div class="greeting">
                                <span>
                                    Bienvenu,
                                </span>
                                <strong>
                                    <?php
                                    echo $_SESSION['user_name'];
                                    ?>
                                </strong>
                            </div>
                            <?php if ($_SESSION["user_auth"]): ?>
                                <span class="admin-badge">
                                    Mode Administrateur
                                </span>
                            <?php endif ?>
                        </div>
                        <div class="logout-container">
                            <a href="logout.php" class="logout">Deconnexion</a>
                        </div>
                    </div>
                    <?php if ($stmt->rowCount() > 0): ?>
                        <?php while ($row = $stmt->fetch(PDO::FETCH_ASSOC)): ?>
                            <tr>
                                <td data-label="Utilisateur"><?php echo $row['name']; ?></td>
                                <?php if ($_SESSION['user_auth']): ?>
                                    <td data-label="Actions" class="actions">
                                        <a href="modifier.php?id=<?php echo $row['id']; ?>" class="btn-edit">Modifer</a>
                                        <a href="supprimer.php?id=<?php echo $row['id']; ?>" class="btn-delete" onclick="return confirm('Supprimer ce membre ?')">Effacer</a>
                                    </td>
                                <?php elseif (!$_SESSION['user_auth'] && $_SESSION['user_id'] == $row['id']): ?>
                                    <td data-label="Actions" class="actions">
                                        <a href="modifier.php?id=<?php echo $row['id']; ?>" class="btn-edit">Modifier</a>
                                        <a href="self_supprimer.php?id=<?php echo $row['id']; ?>" class="btn-delete" onclick="return confirm('Supprimer ce membre ?')">Effacer</a>
                                    </td>
                                <?php else: ?>
                                    <td data-label="Actions"></td>
                                <?php endif; ?>
                            </tr>
                        <?php endwhile; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="2" style="text-align: center;">Aucun membres n'ai dans la classe.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>