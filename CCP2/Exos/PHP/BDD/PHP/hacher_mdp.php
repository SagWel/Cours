<?php

/**
 * PAGE DE MAINTENANCE : Sécurisation des mots de passe
 * Ce script transforme les mots de passe "en clair" en empreintes hachées.
 */

// 1. Connexion à la base
try {
    $pdo = new PDO('mysql:host=localhost;dbname=apprenants;charset=utf8', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur fatale : ' . $e->getMessage());
}

// 2. Récupération des utilisateurs
$stmt = $pdo->query("SELECT id, user, pwd FROM clients");
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maintenance Sécurité - Hachage</title>
    <style>
        :root {
            --bg: #0f172a;
            --card-bg: #1e293b;
            --text: #f1f5f9;
            --success: #22c55e;
            --info: #3b82f6;
            --warning: #eab308;
        }

        body {
            font-family: 'Courier New', Courier, monospace;
            background: var(--bg);
            color: var(--text);
            padding: 20px;
            line-height: 1.6;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
        }

        .terminal {
            background: var(--card-bg);
            border-radius: 8px;
            padding: 25px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            border: 1px solid #334155;
        }

        h1 {
            color: var(--info);
            font-size: 1.5rem;
            border-bottom: 1px solid #334155;
            padding-bottom: 10px;
            margin-top: 0;
        }

        .log-entry {
            margin-bottom: 8px;
            font-size: 14px;
        }

        .status-updated {
            color: var(--success);
            font-weight: bold;
        }

        .status-ignored {
            color: var(--warning);
        }

        .footer {
            margin-top: 25px;
            padding-top: 15px;
            border-top: 1px solid #334155;
            text-align: center;
        }

        .btn-home {
            display: inline-block;
            background: var(--info);
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: bold;
            font-family: sans-serif;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="terminal">
            <h1>[CONSOLE DE SÉCURITÉ] Mise à jour des Hash</h1>

            <?php
            $count_updated = 0;
            $count_ignored = 0;

            foreach ($users as $user) {
                echo '<div class="log-entry">';
                echo '> Utilisateur : <strong>' . htmlspecialchars($user['user']) . '</strong> (ID ' . $user['id'] . ') ... ';

                // Vérification du préfixe standard du hachage PHP ($2y$)
                if (strpos($user['pwd'], '$2y$') !== 0) {

                    // Hachage du mot de passe
                    $nouveau_hash = password_hash($user['pwd'], PASSWORD_DEFAULT);

                    // Mise à jour SQL
                    $update = $pdo->prepare("UPDATE clients SET pwd = ? WHERE id = ?");
                    $update->execute([$nouveau_hash, $user['id']]);

                    echo '<span class="status-updated">HACHAGE TERMINÉ</span>';
                    $count_updated++;
                } else {
                    echo '<span class="status-ignored">DÉJÀ SÉCURISÉ</span>';
                    $count_ignored++;
                }
                echo '</div>';
            }
            ?>

            <div class="footer">
                <p>Rapport : <?php echo $count_updated; ?> mis à jour, <?php echo $count_ignored; ?> ignorés.</p>
                <p><strong>OPÉRATION TERMINÉE AVEC SUCCÈS</strong></p>
                <a href="login.php" class="btn-home">Aller à la page de connexion</a>
            </div>
        </div>
    </div>

</body>

</html>