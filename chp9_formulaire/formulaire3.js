function verifierMotDePasse(event) {
    event.preventDefault(); 

    const motDePasseSaisi = document.getElementById('motDePasse').value;
    const motDePasseCorrect = 'BTSCIEL92110';  // Le mot de passe correct

    // Vérification du mot de passe
    if (motDePasseSaisi === motDePasseCorrect) {
        // Si le mot de passe est correct, rediriger vers la page protégée ou afficher le contenu
        document.getElementById('contenuProtege').style.display = 'block';
        document.getElementById('formulaireMotDePasse').style.display = 'none';
    } else {
        // Si le mot de passe est incorrect, afficher une alerte
        alert('Mot de passe incorrect');
    }
}