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

