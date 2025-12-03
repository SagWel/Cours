<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['user'];
    $pwd = $_POST['pwd'];

    if ($user == 'user' && $pwd == '1234') {
        $_SESSION['user'] = $user;

        header("Location: session.php");
        exit();
    } else {
        $_SESSION['error_message'] = "Pas de chance !";
        header("Location: login.php");
        exit();
    }
}

$error = null;
if (isset($_SESSION['error_message'])) {
    $error = $_SESSION['error_message'];
    unset($_SESSION['error_message']);
}

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connection</title>
    <link rel="stylesheet" href="../CSS/login.css">
</head>

<body>

    <div class="container">
        <form method="post">

            <div class="input-container">
                <div class="form-input">
                    <label for="user">Quel est ton nom ?</label>
                    <input type="text" name="user" placeholder="user">
                </div>

                <div class="form-input">
                    <label for="pwd">Numéro d'autorisation ?</label>
                    <input type="password" name="pwd" placeholder="1234">
                </div>
            </div>

            <button type="submit" class="form-btn">Tente ta chance !</button>

        </form>
    </div>

    <div id="popUp">
        <span id="errorMessageText"><?php echo $error ?></span>
    </div>


    <?php if ($error) : ?>
        <script src="../JS/scripts.js"></script>
        <script>
            showPopUp(<?php echo json_encode($error); ?>)
        </script>
    <?php endif ?>
</body>

</html>