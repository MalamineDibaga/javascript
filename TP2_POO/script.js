
class Afficheur {
    constructor(id, nom, localite, message) {
        this.id = id;
        this.nom = nom;
        this.localite = localite;
        this.message = message;
    }

    afficherInfos() {
        return `Afficheur ${this.nom} (${this.id}) - Localité: ${this.localite}, Message: "${this.message}"`;
    }
    
}
const monAfficheur = new Afficheur(1, "Afficheur Test", "Station A", "Bienvenue !");
console.log(monAfficheur.afficherInfos());
class Dashboard {
    constructor() {
        this.afficheurs = new Map();
        this.afficheursListElement = document.getElementById("afficheurs-list");
    }

    ajouterAfficheur(id, nom, localite, message) {
        if (this.afficheurs.has(id)) {
            alert('Un afficheur avec cet ID existe déjà!');
            return;
        }
        const afficheur = new Afficheur(id, nom, localite, message);
        this.afficheurs.set(id, afficheur);
        this.afficherTousLesAfficheurs();
    }

    supprimerAfficheur(id) {
        this.afficheurs.delete(id);
        this.afficherTousLesAfficheurs();
    }

    mettreAJourMessage(id, message) {
        const afficheur = this.afficheurs.get(id);
        if (afficheur) {
            afficheur.message = message;
            this.afficherTousLesAfficheurs();
        }
    }

    afficherTousLesAfficheurs() {
        this.afficheursListElement.innerHTML = '';
        this.afficheurs.forEach((afficheur) => {
            const afficheurElement = document.createElement("div");
            afficheurElement.classList.add("afficheur");

            afficheurElement.innerHTML = `
                <h3>${afficheur.nom} (ID: ${afficheur.id})</h3>
                <p>Localité : ${afficheur.localite}</p>
                <p>Message : <span id="message-${afficheur.id}">${afficheur.message}</span></p>
                <button class="update" onclick="mettreAJourMessage(${afficheur.id})">Mettre à jour</button>
                <button class="delete" onclick="supprimerAfficheur(${afficheur.id})">Supprimer</button>
            `;

            this.afficheursListElement.appendChild(afficheurElement);
        });
    }
}

const dashboard = new Dashboard();

// Fonction pour ajouter un afficheur
document.getElementById("form-afficheur").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = parseInt(document.getElementById("id").value);
    const nom = document.getElementById("nom").value;
    const localite = document.getElementById("localite").value;
    const message = document.getElementById("message").value;

    dashboard.ajouterAfficheur(id, nom, localite, message);

    // Réinitialiser les champs du formulaire
    document.getElementById("form-afficheur").reset();
});

// Fonction pour supprimer un afficheur
function supprimerAfficheur(id) {
    dashboard.supprimerAfficheur(id);
}

// Fonction pour mettre à jour le message d'un afficheur
function mettreAJourMessage(id) {
    const newMessage = prompt("Entrez le nouveau message : ");
    if (newMessage) {
        dashboard.mettreAJourMessage(id, newMessage);
    }
}

// load pour peut etre le localstorage
window.addEventListener("load", () => {
});
