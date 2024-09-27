let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Premier element : ",  nombres[0]);
console.log("Dernier element : ",  nombres[nombres.length - 1] = 0);
console.log(nombres);

nombres.push(11.12);
console.log(nombres);

nombres.shift(11.12);
console.log(nombres);


function somme_tableau(arr) {


    let somme = 0;
    for (let i = 0; i < arr.length; i++) {

        somme += arr[i];
    } 

    return somme;
}

console.log(somme_tableau(nombres));

function recherche_element(arr, valeur) {


    return arr.includes(valeur);
}

console.log(recherche_element(nombres, 5));

function fusion_tableau(arr1, arr2) {

    return arr1.concat(arr2);
}

let tableau1 = [2, 4 ,6];
let tableau2 = [3, 5 ,7];

console.log(fusion_tableau(tableau1, tableau2));
