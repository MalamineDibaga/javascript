// importer les modules nécessaires
const express = require('express'); // framework pour gérer les api rest (requette http)
const dotenv = require('dotenv'); // pour charger les variables d'environnement
const db = require('./db'); // connexion mysql configurée dans db.js

// charger les variables d'environnement
dotenv.config();

// créer une instance d'express
const app = express();

// middleware pour analyser les requêtes json
app.use(express.json());

// définir le port du serveur
const PORT = process.env.PORT || 3000;

// ** routes **

// route d'accueil pour tester le serveur
app.get('/', (req, res) => {
    console.log('GET / - Page d\'accueil');
    res.send('api rest node.js + mysql'); // réponse simple pour la page d'accueil
});

// route pour récupérer tous les étudiants
app.get('/students', async (req, res) => {
    console.log('GET /students - Récupérer tous les étudiants');
    try {
        // exécuter une requête sql pour récupérer tous les étudiants
        const [rows] = await db.query('SELECT * FROM students');
        console.log('Résultats de la requête SQL:', rows); // afficher les résultats récupérés
        res.json(rows); // retourner les données sous forme de json
    } catch (err) {
        console.error('Erreur lors de la récupération des étudiants:', err.message); // log de l'erreur
        res.status(500).json({ error: err.message });
    }
});

// route pour ajouter un nouvel étudiant
app.post('/students', async (req, res) => {
    const { name, email, age } = req.body; // extraire les données envoyées par le client
    console.log(`POST /students - Ajouter un étudiant: ${name}, ${email}, ${age}`);
    try {
        // requête sql pour insérer un étudiant
        const sql = `INSERT INTO students (name, email, age) VALUES (?, ?, ?)`;
        const [result] = await db.query(sql, [name, email, age]); // utilisation de paramètres sécurisés
        console.log('Réponse après insertion:', result); // afficher le résultat de l'insertion

        // répondre avec l'identifiant de l'étudiant inséré
        res.status(201).json({ id: result.insertId, name, email, age });
    } catch (err) {
        console.error('Erreur lors de l\'ajout de l\'étudiant:', err.message); // log de l'erreur
        res.status(500).json({ error: err.message });
    }
});

// route pour récupérer un étudiant spécifique par id
app.get('/students/:id', async (req, res) => {
    const id = req.params.id;
    console.log(`GET /students/${id} - Récupérer l'étudiant avec l'ID: ${id}`);
    try {
        // récupérer l'étudiant avec l'id spécifié
        const sql = `SELECT * FROM students WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);

        // vérifier si l'étudiant existe
        if (rows.length === 0) {
            console.log(`Étudiant avec ID ${id} non trouvé`); // log si l'étudiant n'existe pas
            return res.status(404).json({ error: 'student not found' });
        }

        // retourner les données de l'étudiant
        console.log(`Étudiant trouvé: ${JSON.stringify(rows[0])}`); // log des informations de l'étudiant
        res.json(rows[0]);
    } catch (err) {
        console.error(`Erreur lors de la récupération de l'étudiant ${id}:`, err.message); // log de l'erreur
        res.status(500).json({ error: err.message });
    }
});

// route pour mettre à jour un étudiant
app.put('/students/:id', async (req, res) => {
    const { name, email, age } = req.body; // extraire les données envoyées
    const id = req.params.id; // id de l'étudiant à mettre à jour
    console.log(`PUT /students/${id} - Mettre à jour l'étudiant: ${name}, ${email}, ${age}`);
    try {
        // requête sql pour mettre à jour l'étudiant
        const sql = `UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?`;
        const [result] = await db.query(sql, [name, email, age, id]); // exécuter avec des paramètres sécurisés
        console.log('Résultat de la mise à jour:', result); // log du résultat de la mise à jour

        // vérifier si l'étudiant existe
        if (result.affectedRows === 0) {
            console.log(`Étudiant avec ID ${id} non trouvé pour la mise à jour`); // log si l'étudiant n'existe pas
            return res.status(404).json({ error: 'student not found' });
        }

        // répondre avec un message de succès
        res.json({ message: 'student updated' });
    } catch (err) {
        console.error(`Erreur lors de la mise à jour de l'étudiant ${id}:`, err.message); // log de l'erreur
        res.status(500).json({ error: err.message });
    }
});

// route pour supprimer un étudiant
app.delete('/students/:id', async (req, res) => {
    const id = req.params.id; // id de l'étudiant à supprimer
    console.log(`DELETE /students/${id} - Supprimer l'étudiant avec l'ID: ${id}`);
    try {
        // requête sql pour supprimer l'étudiant
        const sql = `DELETE FROM students WHERE id = ?`;
        const [result] = await db.query(sql, [id]); // exécuter avec des paramètres sécurisés
        console.log('Résultat de la suppression:', result); // log du résultat de la suppression

        // vérifier si un étudiant a été trouvé et supprimé
        if (result.affectedRows === 0) {
            console.log(`Étudiant avec ID ${id} non trouvé pour suppression`); // log si l'étudiant n'existe pas
            return res.status(404).json({ error: 'student not found' });
        }

        // répondre avec un message de succès
        res.json({ message: 'student deleted' });
    } catch (err) {
        console.error(`Erreur lors de la suppression de l'étudiant ${id}:`, err.message); // log de l'erreur
        res.status(500).json({ error: err.message });
    }
});

// ** démarrer le serveur **
app.listen(PORT, () => {
    console.log(`serveur démarré sur http://localhost:${PORT}`);
});