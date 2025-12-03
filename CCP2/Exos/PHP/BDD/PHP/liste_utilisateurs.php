<?php
session_start();

try {
    $pdo = new PDO('mysql:host=localhost;dbname=apprenants;charset=utf8', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

$sql = "SELECT * FROM clients ORDER BY id DESC";
$stmt = $pdo->query($sql);
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des Clients</title>
    <link rel="stylesheet" href="../CSS/liste_utilisateurs.css">
</head>

<body>

    <div class="container">
        <h1>Liste des Clients</h1>

        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Utilisateur</th>
                        <th>Code Postal</th>
                        <th>Rôle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <div class="user-navbar">
                        <div class="user-greeting">
                            <span>
                                Bienvenue,
                                <strong>
                                    <?php
                                    echo htmlspecialchars_decode($_SESSION['user_nom']);
                                    ?>
                                </strong>
                            </span>
                            <span class="role-badge <?php echo ($_SESSION['role'] == 1) ? 'admin' : 'user'; ?>">
                                <?php
                                echo ($_SESSION['role'] == 1) ? 'Mode Administrateur' : 'Mode utilisateur';
                                ?>
                            </span>
                        </div>

                        <div class="btn-container">
                            <?php if ($_SESSION['role'] == 1) : ?>
                                <a href="../HTML/inserer.html" class="btn-inserer">Nouvel utilisateur</a>
                            <?php endif ?>

                            <a href="./logout.php" class="btn-logout">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="margin-right:8px;">
                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                                Déconnexion
                            </a>
                        </div>
                    </div>
                    <?php if ($stmt->rowCount() > 0) : ?>
                        <?php while ($row = $stmt->fetch(PDO::FETCH_ASSOC)): ?>
                            <tr>
                                <td data-label="ID"><?php echo $row['id']; ?></td>
                                <td data-label="Utilisateur"><strong><?php echo htmlspecialchars($row['user']); ?></strong></td>
                                <td data-label="CP"><?php echo htmlspecialchars($row['CP'] ?? 'N/A'); ?></td>
                                <td data-label="Rôle">
                                    <?php if ($row['auth'] == 1) : ?>
                                        <span class="badge badge-admin">Admin</span>
                                    <?php else: ?>
                                        <span class="badge badge-user">User</span>
                                    <?php endif ?>
                                </td>
                                <?php if ($_SESSION['role'] == 1) : ?>
                                    <td data-label="Actions">
                                        <a href="modifier.php?id=<?php echo $row['id']; ?>" class="btn btn-edit">Modifier</a>
                                        <a href="supprimer.php?id=<?php echo $row['id']; ?>" class="btn btn-delete" onclick="return confirm('Supprimer ce client ?')">Effacer</a>
                                    </td>
                                <?php elseif ($_SESSION['role'] == 0 && $_SESSION['user_id'] == $row['id']) : ?>
                                    <td data-label="Actions">
                                        <a href="modifier.php?id=<?php echo $row['id']; ?>" class="btn btn-edit">Modifier</a>
                                        <a href="self_supprimer.php?id=<?php echo $row['id']; ?>" class="btn btn-delete" onclick="return confirm('Supprimer votre compte ?')">Effacer</a>
                                    </td>
                                <?php else: ?>
                                    <td data-label="Actions"></td>
                                <?php endif ?>
                            </tr>
                        <?php endwhile; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="5" style="text-align:center;">Aucun utilisateur trouvé.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>

</body>

</html>