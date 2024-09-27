let listeDeTaches = [];
let statutDeTaches = [];

// Nom d'utilisateur
let nom = prompt("Quel est votre nom ?");
alert(`Bienvenue, ${nom}`);

// Afficher le menu
function afficher_menu() {
    return prompt(`Choisissez une option : 
    ----------------------------------------------------------------------------------
    1. Ajouter une tache.
    2. Afficher la liste des taches.
    3. Marquer une tache comme terminée.
    4. Quitter (ou appuyer sur 'q').
    ----------------------------------------------------------------------------------`);
}

// Ajouter une nouvelle tâche
function ajouterTache() {
    let tache = prompt("Entrez une nouvelle tâche :");
    if (tache) {
        listeDeTaches.push(tache);
        statutDeTaches.push(false);
        alert(`La tâche "${tache}" a été ajoutée à votre liste.`);
        console.log(listeDeTaches);
    }
}

// Marquer une tâche comme terminée
function marquerTacheTerminee() {
    if (listeDeTaches.length === 0) {
        alert("La liste de tâches est vide.");
        return;
    }

    // Afficher la liste des tâches avec leur statut
    let tachesAvecStatut = "";
    for (let i = 0; i < listeDeTaches.length; i++) {
        let statut = statutDeTaches[i] ? "Terminée" : "En cours";
        tachesAvecStatut += `${i + 1}. ${listeDeTaches[i]} (${statut})\n`;
    }

    let tacheNum = parseInt(prompt(`Liste actuelle des tâches : \n${tachesAvecStatut}\nEntrez le numéro de la tâche que vous voulez marquer comme terminée :`));

    // Vérifier si le numéro de tâche est valide
    if (tacheNum > 0 && tacheNum <= listeDeTaches.length) {
        statutDeTaches[tacheNum - 1] = true; // Marquer la tâche comme terminée
        alert(`La tâche "${listeDeTaches[tacheNum - 1]}" a été marquée comme terminée.`);
    } else {
        alert("Numéro de tâche invalide.");
    }
}

// Afficher toutes les tâches
function afficherTaches() {
    if (listeDeTaches.length === 0) {
        alert("La liste de tâches est vide.");
    } else {
        let affichage = "";
        for (let i = 0; i < listeDeTaches.length; i++) {
            let statut = statutDeTaches[i] ? "Terminée" : "En cours";
            affichage += `${i + 1}. ${listeDeTaches[i]} (${statut})\n`;
        }
        alert(affichage);
    }
}

// Boucle principale pour le menu
function gerer_liste_tache() {
    let choix;
    do {
        choix = afficher_menu();

        switch (choix) {
            case '1':
                ajouterTache();
                break;
            case '2':
                afficherTaches();
                break;
            case '3':
                marquerTacheTerminee();
                break;
            case '4':
            case 'q':
                alert(`Merci d'avoir utilisé le gestionnaire de tâches, ${nom} !`);
                break;
            default:
                alert("Choix invalide. Veuillez réessayer.");
        }
    } while (choix !== '4' && choix !== 'q');
}

// Démarrer le programme
gerer_liste_tache();
