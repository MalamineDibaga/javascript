const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');  

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'ciel',
    password: 'ciel',
    database: 'Filmotheque3'  
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        process.exit(1);
    }
    console.log('Connecté à la base de données.');
});

app.use(cors());  
app.use(bodyParser.json());

// Utilisation de async/await pour la gestion asynchrone
app.post('/api/users', async (req, res) => {
    const { acteurNom, acteurPrenom, filmTitre } = req.body;

    if (!acteurNom || !acteurPrenom || !filmTitre) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    try {
        // 1. Insertion de l'acteur dans la table ACTEUR
        const insertActeurQuery = 'INSERT INTO ACTEUR (Nom, Prenom) VALUES (?, ?)';
        const [acteurResult] = await db.promise().query(insertActeurQuery, [acteurNom, acteurPrenom]);
        const acteurId = acteurResult.insertId;

        // 2. Vérifier si le film existe dans la table FILM
        const checkFilmQuery = 'SELECT IdFilm FROM FILM WHERE Titre = ?';
        const [films] = await db.promise().query(checkFilmQuery, [filmTitre]);
        let filmId;

        if (films.length > 0) {
            // Si le film existe, récupérer son ID
            filmId = films[0].IdFilm;
        } else {
            // Si le film n'existe pas, l'ajouter à la table FILM
            const insertFilmQuery = 'INSERT INTO FILM (Titre) VALUES (?)';
            const [filmResult] = await db.promise().query(insertFilmQuery, [filmTitre]);
            filmId = filmResult.insertId; // Récupérer l'ID du film ajouté
        }

        // 3. Ajouter l'assoacteur-film dans la table FILMOGRAPHIE
        const insertFilmographieQuery = 'INSERT INTO FILMOGRAPHIE (IdActeur, IdFilm) VALUES (?, ?)';
        await db.promise().query(insertFilmographieQuery, [acteurId, filmId]);

        res.status(201).json({ message: 'Acteur et film ajoutés.' });

    } catch (err) {
        console.error('Erreur lors du traitement de la requête :', err);
        return res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
