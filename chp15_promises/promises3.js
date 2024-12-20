const majeur = (age) => age >= 18;

const verif_user = (user) => {
    return new Promise((resolve, reject) => {
        if (majeur(user.age)) {
            resolve(`Acces autorisé : ${user.nom} est majeur.`)
        } else {
            reject(`Acces refusé : ${user.nom} est mineur.`)
        }
    })
}

const user_majeur = { nom: "Malamine", age: 17 }

verif_user(user_majeur)
    .then((txt) => {
        console.log(txt)
    })
    .catch((txt) => {
        console.log(txt)
    })
