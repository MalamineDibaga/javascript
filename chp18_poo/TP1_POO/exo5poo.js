class Employe {
    constructor(nom, poste, salaire) {
        console.log("Appel constructeur classe mere")
        this.nom = nom;
        this.salaire = salaire;
        this.poste = poste; 
    }
    
    afficherDetails() {
        console.log(`NOm  ${this.nom}, Poste : ${this.poste}, Salaire : ${this.salaire} €`);
    }
}
class Manager extends Employe {
    constructor(nom, poste, salaire,att_equipe) {
    console.log("Appel constructeur classe fille")

        super(nom,poste,salaire)
        this.equipe = att_equipe;
    }

    afficherDetails(){
        
        // console.log(`Equipe : ${this.equipe.join(', ')}`);
        console.log(`NOM : ${this.nom} dans l'équipe ${this.equipe}`);
    }
}

const manager = new Manager("Alice", "Directrice", 8000,"debug");
manager.afficherDetails();