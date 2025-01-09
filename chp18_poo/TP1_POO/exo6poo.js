class Livre {
    constructor(titre, auteur, pages) {
      this.titre = titre;
      this.auteur = auteur;
      this.pages = pages;
    }
  
    afficherInfo() {
      console.log(`Titre : ${this.titre}, Auteur : ${this.auteur}, Pages : ${this.pages}`);
    }
  }
  
  class Bibliotheque {
    #livres;
  
    constructor() {
      this.#livres = [];
    }
  
    ajouterLivre(livre) {
        this.#livres.push(livre);
    }
  
    afficherLivres() {
      console.log('Liste des livres :');
      this.#livres.forEach((livre, index) => {
        console.log(`${index + 1}.`);
        livre.afficherInfo();
      });
    }
  }
  

  const bibliotheque = new Bibliotheque();
  bibliotheque.ajouterLivre(new Livre('1984', 'George Orwell', 325));
  bibliotheque.ajouterLivre(new Livre('Le Petit Prince', 'Antoine de Saint-Exupery', 96));
  bibliotheque.afficherLivres();