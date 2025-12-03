<nav class="navbar">
    <a href="index.php" class="navbar-brand">🚀 AdminShop</a>

    <button class="menu-toggle" aria-label="Ouvrir le menu" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <ul class="navbar-nav" id="navMenu">
        <li><a href="index.php" class="nav-link">Dashboard</a></li>
        <li><a href="inscription_liste.php" class="nav-link">Clients</a></li>
        <li><a href="produits.php" class="nav-link">Produits</a></li>
        <li><a href="creer_commande.php" class="nav-link">Commander</a></li>
        <li><a href="liste_commandes.php" class="nav-link">Historique</a></li>
    </ul>
</nav>

<script>
    function toggleMenu() {
        const menu = document.getElementById('navMenu');
        menu.classList.toggle('active');
    }
</script>