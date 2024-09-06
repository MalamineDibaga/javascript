let nombre = prompt(" Veuillez saisir un nombre : "); 

if (nombre % 3 == 0 && nombre % 5 == 0) {
    console.log(`${nombre} est un multiple de 3 et de 5.`);
} else {
    console.log(`${nombre} n'est pas un multiple de 3 et de 5.`);
}
