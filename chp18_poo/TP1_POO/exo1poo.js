class Personne {
    constructor(nom, age) {
        this.nom = nom; 
        this.age = age;
    }

    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`)
    }

}

const personne = new Personne('Alice', 30);
personne.sePresenter(); 
