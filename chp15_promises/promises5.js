function appelAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve({ nom: "Alice", age: 25 });
            } else {
                reject("Erreur lors de l'appel de l'API");
            }
        }, 3000);
    });
}

appelAPI()
    .then(user => {
        console.log("infos de l'utilisateur :", user);
    })
    .catch(erreur => {
        console.log(erreur);
    });
