// function calculatrice(nb1, nb2, operation) {
//     switch(operation) {

//     case '+':
//         return nb1 + nb2
    
//     case '-':
//         return nb1 - nb2
            
//     case '*':
//         return nb1 * nb2
    
//     case '/':
//         if (nb2 != 0) {
//             return nb1 / nb2
//          } else {

//             return "Impossible de faire une division par 0"

//          }
           
//     default:
//         return "Impossible de faire l'operation"; 

//     }

  
// }

//  console.log(calculatrice(5, 5, '+'));
//  console.log(calculatrice(5, 5, '-'));   
//  console.log(calculatrice(5, 5, '*'));   
//  console.log(calculatrice(5, 5, '/'));
//  console.log(calculatrice(5, 0, '/'));

const calculatrice = (nb1, nb2, operation) => {
    switch(operation) {

    case '+':
        return nb1 + nb2
    
    case '-':
        return nb1 - nb2
            
    case '*':
        return nb1 * nb2
    
    case '/':
        if (nb2 != 0) {
            return nb1 / nb2
         } else {

            return "Impossible de faire une division par 0"

         }
           
    default:
        return "Impossible de faire l'operation"; 

    }

  
}

 console.log(calculatrice(5, 5, '+'));
 console.log(calculatrice(5, 5, '-'));   
 console.log(calculatrice(5, 5, '*'));   
 console.log(calculatrice(5, 5, '/'));
 console.log(calculatrice(5, 0, '/'));       