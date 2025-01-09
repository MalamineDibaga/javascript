class Utilisateur {
  
    constructor(nom,prenom,mail) {
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
    }

    presentation(){
        return `Bonjour, je m'appelle ${this.nom} ${this.prenom} et vous pouvez me contacter à ${this.mail}`;
    }
}

const gilbert = new Utilisateur("Dagobert", "Gilbert", "gilbert.d@snir.fr");
console.log(gilbert.presentation());
