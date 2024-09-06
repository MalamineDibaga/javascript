let age = prompt("Veuillez entrer votre age : "); 

if (age > 18) {
    console.log("Vous pouvez voter.");
} else if (age == 18) {
    console.log("C'est votre première année de vote !");
} else {
    console.log("Vous ne pouvez pas encore voter.");
}
