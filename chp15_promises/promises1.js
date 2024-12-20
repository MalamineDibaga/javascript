const promesse = new Promise((resolve, reject) => {
    setTimeout(() => {
        let aleatoire = Math.random()

        if (aleatoire > 0.5) {
            resolve("Promesse résolue !")
        } else {
            reject("Promesse rejetée !")
        }
    }, 2000)
})

promesse
    .then((txt) => {
        console.log(txt)
    
    })

    .catch((txt) => {
        console.log(txt)
    
    })

    