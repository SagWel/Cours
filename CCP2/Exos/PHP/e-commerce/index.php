<?php
require_once 'db_connect.php';

$nbClients = $pdo->query("SELECT COUNT(*) FROM Clients")->fetchColumn();
$nbvProduits = $pdo->query("SELECT COUNT(*) FROM Produits")->fetchColumn();
$nbCommandes = $pdo->query("SELECT COUNT(*) FROM Commandes")->fetchColumn();
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Admin - Shop</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .grid-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .stat-card {
            background: var(--primary-color);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }

        .stat-card h3 {
            font-size: 0.9rem;
            text-transform: uppercase;
            opacity: 0.8;
        }

        .stat-card p {
            font-size: 2rem;
            font-weight: bold;
        }

        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .menu-item {
            border: 2px solid var(--border-color);
            padding: 20px;
            border-radius: 8px;
            text-decoration: none;
            color: inherit;
            transition: all 0.3s;
        }

        .menu-item:hover {
            border-color: var(--primary-color);
            background: #f0f7ff;
        }
    </style>
</head>

<body>
    <?php include 'header.php'; ?>
    <div class="container">
        <h1>Système de Gestion E-Commerce</h1>
        <p style="margin-bottom: 30px; color: var(--secondary-color);">Bienvenue dans l'interface d'administration.</p>

        <div class="grid-stats">
            <div class="stat-card">
                <h3>Clients</h3>
                <p><?= $nbClients ?></p>
            </div>
            <div class="stat-card">
                <h3>Produits</h3>
                <p><?= $nbProduits ?></p>
            </div>
            <div class="stat-card">
                <h3>Commandes</h3>
                <p><?= $nbCommandes ?></p>
            </div>
        </div>

        <div class="menu-grid">
            <a href="inscription_liste.php" class="menu-item">
                <h3>👥 Gestion Clients</h3>
                <p>Ajouter, lister et modifier vos clients.</p>
            </a>
            <a href="produits.php" class="menu-item">
                <h3>📦 Catalogue Produits</h3>
                <p>Gérer les stocks et les prix des articles.</p>
            </a>
            <a href="creer_commande.php" class="menu-item">
                <h3>🛒 Nouvelle Commande</h3>
                <p>Enregistrer un achat pour un client.</p>
            </a>
            <a href="details_commande.php" class="menu-item">
                <h3>📊 Historique Ventes</h3>
                <p>Voir le détail de toutes les transactions.</p>
            </a>
        </div>
    </div>
</body>

</html>