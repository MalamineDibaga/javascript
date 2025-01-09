class CompteBancaire {
    #solde;

    constructor(soldeInitial = 0) {
        this.#solde = soldeInitial; 
    }

    get solde() {
        return this.#solde;
    }

    deposer(montant) {
        if (montant > 0) {
            this.#solde += montant;
            console.log(`Depot effectué : ${montant} €`);
        } else {
            console.log(`Erreur : Montant inférieur ou égal a 0`);
        }
    }

    retirer(montant) { 
        if (this.solde >= montant && montant > 0) {
            this.#solde -= montant;
            console.log(`Retrait effectué : ${montant} €`);
        } else {
            console.log(`Erreur : Solde insuffisant ou montant <= a 0`);
        }
    }
}


const compte = new CompteBancaire(1000);
console.log(compte.solde); 
compte.deposer(500); 
console.log(compte.solde);  
compte.retirer(200); 
console.log(compte.solde); 
compte.retirer(1500);
console.log(compte.solde); 
