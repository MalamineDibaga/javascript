const fs = require('fs');


fs.readFile('settings.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log('Erreur lors de la lecture du fichier :', err);
        return;
    }

    console.log('JSON brut:', jsonString);

    try {
        const data = JSON.parse(jsonString);

        console.log('Données parsées JSON:', data);

        for (let cle in data) {
            if (data.hasOwnProperty(cle)) {
                console.log(`Chaine: ${data[cle].chaine}, Multicast: ${data[cle].multicast}, Port: ${data[cle].port}`);
            }
        }

    } catch (err) {
        console.log('Erreur lors du parsing du fichier JSON :', err);
    }
});