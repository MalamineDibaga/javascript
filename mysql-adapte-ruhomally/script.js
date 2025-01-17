document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const acteurNom = document.getElementById('ACTEUR').value;
    const acteurPrenom = document.getElementById('ACTEUR_PRENOM').value;
    const filmTitre = document.getElementById('FILM').value;

    // Validation des champs
    if (!acteurNom || !acteurPrenom || !filmTitre) {
        alert('Tous les champs sont requis.');
        return;
    }

    try {
        // Envoi des données au serveur
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ acteurNom, acteurPrenom, filmTitre })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Acteur et film ajoutés avec succès!');
        } else {
            alert(`Erreur : ${result.message}`);
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Impossible de soumettre le formulaire.');
    }
});
