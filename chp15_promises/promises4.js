function diviser(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Division par 0")
        } else {
            resolve(a / b)
        }
    })
}

diviser(5, 2)
    .then(resultat => {
        console.log("Le résultat de la division est : " + resultat)
    })
    .catch(error => {
        console.log(error)
    })
