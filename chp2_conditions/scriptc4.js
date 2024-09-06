let x = 10;
let y = "10";


console.log(x == y);  // true, car == compare les valeurs en effectuant une conversion de type si nécessaire
console.log(x === y); // false, car === compare les valeurs et les types (ici, un nombre et un string)
console.log(x < y);   // false, car "10" est une chaîne, donc la comparaison < ne fonctionne pas correctement
console.log(x > y);   // false, même raison qu'au-dessus
console.log(x <= y);  // true meme raison que le premier
console.log(x >= y);  // true meme raison que le premier 
