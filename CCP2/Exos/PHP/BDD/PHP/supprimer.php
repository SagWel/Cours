<?php

try {
    $pdo = new PDO('mysql:host=localhost;dbname=apprenants;charset=utf8', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

if (isset($_GET['id']) && !empty($_GET['id'])) {

    $id = (int)$_GET['id'];

    $stmt = $pdo->prepare("DELETE FROM clients WHERE id = :id");
    $stmt->execute(['id' => $id]);

    header("Location: liste_utilisateurs.php?message=suppresson_ok");
    exit();
} else {
    header("Location: liste_utilisateurs.php?error=id_manquant");
    exit();
}
