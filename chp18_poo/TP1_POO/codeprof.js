class Utilisateur {
  constructor(nom, email) {
    console.log("Appel constructeur classe mere")

    this.nom = nom;
    this.email = email;
    this.dateInscription = new Date();
  }

  afficherProfil() {
    console.log(`Nom: ${this.nom} | Email: ${this.email}`);
  }
}

class Admin extends Utilisateur {

  constructor(nom, email) {
    console.log("Appel constructeur classe fille")

    super(nom, email)
    this.role = "admin";
  }
  afficherProfil(){
    console.log(`L'utilisateur ${this.nom}  a le role ${this.role}`)
  }

  supprimerUtilisateur(utilisateur) {
    console.log(`${utilisateur.nom} a été supprimé par l'admin ${this.nom}`);
  }
}

const utilisateur = new Utilisateur("Alice", "alice@example.com");
utilisateur.afficherProfil();

const admin = new Admin("Bob", "bob@admin.com");
admin.afficherProfil();
admin.supprimerUtilisateur(utilisateur);
admin.afficherProfil()