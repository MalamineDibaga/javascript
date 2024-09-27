let marque = ['apple', 'samsung', 'dell', 'hp', 'lg', 'acer']; 

// affiche la liste dans le prompt

let marquePreferee = prompt("Voici les marques disponibles : " + marque.join(", ") + ".\nQuelle marque preferez-vous ?");

if (marque.includes(marquePreferee)) { // verifie si la marque choisie est dans le tableau
    marque.splice(marque.indexOf(marquePreferee), 1); // supprime la marque choisie de la liste
    alert("OK, la marque " + marquePreferee + " a ete retiree de la liste.");
} else {
    alert("Desole, la marque " + marquePreferee + " est indisponible.");
}

alert("Voici la nouvelle liste des marques disponibles : " + marque.join(", "));