const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');  

const app = express();


const db = mysql.createConnection({
    host: 'localhost',
    user: 'ciel',
    password: 'ciel',
    database: 'ex1js_md'
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


app.post('/api/users', (req, res) => {
    const { nom, email, age } = req.body;

    if (!nom || !email || !age) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    const query = 'INSERT INTO utilisateurs (nom, email, age) VALUES (?, ?, ?)';
    db.query(query, [nom, email, age], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de l\'utilisateur :', err);
            return res.status(500).json({ message: 'Erreur interne du serveur.' });
        }
        res.status(201).json({ message: 'Utilisateur ajouté avec succès.' });
    });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});