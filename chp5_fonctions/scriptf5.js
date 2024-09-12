// function TVA(prix_ht, taux_tva) {


//     return prix_ht * (1 + taux_tva / 100); 
// }

// console.log(TVA(600,15));

const calculerTVA = (prix_ht, taux_tva) => {


    return prix_ht * (1 + taux_tva / 100); 
}

console.log(TVA(600,15));

