let liste_courses = [];

// afficher menu

function afficher_menu() {
    return prompt(`Choisissez une option : 
        ----------------------------------------------------------------------------------
        1. Ajouter un élément à la liste de courses.
        2. Retirer un élément de la liste de courses.
        3. Afficher les éléments de la liste de courses.
        4. Vider la liste de courses.
        5. Quitter le programme (ou appuyer sur 'q')
        ----------------------------------------------------------------------------------`);

        



}

// ajoutant 

function ajouter_element() {
    let produit = prompt("Entrez le nom du produit que vous voulez ajouter :");
    if (produit) {
        liste_courses.push(produit);
        alert(`Le produit "${produit}" a ete ajoute à la liste.`);
    }
}

// retirer 

function retirer_element() {
    if (liste_courses.length == 0) {
        alert("La liste de courses est vide.");
        return;
    }

    let produit = prompt(`Liste actuelle : ${liste_courses.join(", ")}\nEntrez le nom du produit à retirer :`);
    let index = liste_courses.indexOf(produit);

    if (index !== -1) {
        liste_courses.splice(index, 1);
        alert(`Le produit "${produit}" a été retiré de la liste.`);
    } else {
        alert(`Le produit "${produit}" n'est pas dans la liste.`);
    }
}

// afficher element

function afficher_elements() {
    if (liste_courses.length === 0) {
        alert("La liste de courses est vide.");
    } else {
        alert(`Liste de courses : ${liste_courses.join(", ")}`);
    }
}

// vider la liste


function vider_liste() {
    liste_courses = [];
    alert("La liste de courses a été vidée.");
}

// boucle principale pour le menu

function gerer_liste_course() {
    let choix;
    do {
        choix = afficher_menu();

        switch (choix) {
            case '1':
                ajouter_element();
                break;
            case '2':
                retirer_element();
                break;
            case '3':
                afficher_elements();
                break;
            case '4':
                vider_liste();
                break;
            case '5':
            case 'q':
                alert("LE PROGRAMME EST TERMINEE.");
                break;
            default:
                alert("Choix invalide. Veuillez recommencer.");
        }
    } while (choix !== '5' && choix !== 'q');
}

// Démarrer le programme
gerer_liste_course();
