let taille = prompt("Veuillez entrer votre taille en cm.");
taille_en_metre = taille / 100;
let poids = prompt("Confirmer votre poids en kg");
let IMC = poids/(taille_en_metre**2);
let resultat = alert(`Votre taux d'IMC est de : ${IMC}`);