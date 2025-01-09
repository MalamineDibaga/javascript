class Animal {
    constructor(nombredepattes, poids) {
        this.nombredepattes = nombredepattes
        this.poids = poids;
    }

    affiche() {
        return `Cet animal possède ${this.nombredepattes} pattes et pèse ${this.poids}`;
    }
}

class Oiseau extends Animal {
    constructor(nombredepattes, poids, longueurdesailes) {
      super(nombredepattes, poids);
      this.longueurdesailes = longueurdesailes;
    }

    affiche() {
      return `${super.affiche()} et les ailes sont ${this.longueurdesailes}`;
    }
}

const perroquet = new Oiseau(2, "4kg", "grandes");
console.log(perroquet.affiche());
