function appreciation(moyenne){
    if (moyenne > 18) {
        return "Excellent";
    } else if (moyenne >= 15){
        return "Tres bien";     
    } else if (moyenne >= 12) {
        return "Bien";
    } else {
        return "Peut mieux faire";
    }
}

// Demander le nombre d'étudiants
let nombre_etudiant = parseInt(prompt("Combien d'etudiants sont dans la classe ?"));

// Demander le nombre d'évaluations par étudiant
let nombre_evaluation = parseInt(prompt("Combien d'évaluations seront saisies pour chaque étudiant ?"));

// Initialiser un tableau pour stocker les moyennes de chaque étudiant
let moyenne_classe = [];

for (let i = 1; i <= nombre_etudiant; i++) {
    
    let notes_etudiants = [];
    let somme_notes = 0; 

    for (let j = 1; j <= nombre_evaluation; j++) {
        let note = parseFloat(prompt(`Saisir la note ${j}, pour l'etudiant ${i} : `));
        notes_etudiants.push(note);
        somme_notes += note; // ajoute la note à la somme totale de notes
    }

    // Calculer la moyenne de l'étudiant
    let moyenne_etudiant = somme_notes / nombre_evaluation;

    // Ajouter la moyenne de l'étudiant dans le tableau des moyennes
    moyenne_classe.push(moyenne_etudiant);

    // Afficher les notes, moyennes et appréciations
    alert(`Etudiant ${i} || Notes : ${notes_etudiants.join(", ")} || Moyenne : ${moyenne_etudiant} || Appréciation : ${appreciation(moyenne_etudiant)}`);
}

// Calculer la moyenne générale de la classe
let somme_moyenne_classe = moyenne_classe.reduce((acc, val) => acc + val, 0); // reduce passe chaque element du tab via callback, 
//chaque itetration acc maj avec acc + val
// apres avoir parcourus tt le tab reduce donne la valeur finale de l'acc 
//  ex : 0 + 15, 15 + 12 etc...

let moyenne_generale_classe = somme_moyenne_classe / nombre_etudiant;

// Afficher la moyenne générale de la classe
alert(`La moyenne generale de la classe est de ${moyenne_generale_classe}`);