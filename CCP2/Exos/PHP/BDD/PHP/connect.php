<?php

session_start();

try {
    $pdo = new PDO('mysql:host=localhost;dbname=apprenants;charset=utf8', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = htmlspecialchars($_POST['user']);
    $pwd_clair = $_POST['pwd'];
    $CP = htmlspecialchars($_POST['CP']);
    $auth = 0;
    $pwd = password_hash($pwd_clair, PASSWORD_DEFAULT);
}

$sql = "INSERT INTO clients (user, pwd, CP, auth) VALUES (:user, :pwd, :CP, :auth)";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':user', $user);
$stmt->bindParam(':pwd', $pwd);
$stmt->bindParam(':CP', $CP);
$stmt->bindParam(':auth', $auth);

if ($stmt->execute()) {
    $sql2 = "SELECT * FROM clients WHERE user = ?";
    $stmt2 = $pdo->prepare($sql2);
    $stmt2->execute([$user]);
    $result = $stmt2->fetch(PDO::FETCH_ASSOC);

    $_SESSION['user_id'] = $result['id'];
    $_SESSION['user_nom'] = $result['user'];
    $_SESSION['role'] = (int)$result['auth'];
} else {
    echo "Echec de l'inscription.<br>";
}

if ($stmt2->execute()) {
    header("Location: liste_utilisateurs.php");
    exit();
} else {
    echo "Echec de l'insertion.<br>";
}
