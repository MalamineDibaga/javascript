// importer le module mysql2 pour gérer la connexion à mysql
const mysql = require('mysql2');

// importer dotenv pour charger les variables d'environnement
const dotenv = require('dotenv');

// charger les variables d'environnement depuis le fichier .env
dotenv.config();

// créer un pool de connexions avec les paramètres de la bdd
const pool = mysql.createPool({
    host: process.env.DB_HOST, // hôte de la bdd
    user: process.env.DB_USER, // utilisateur mysql
    password: process.env.DB_PASSWORD, // mot de passe mysql
    database: process.env.DB_NAME // nom de la bdd
});

// exporter le pool en mode promise pour permettre l'utilisation avec async/await
module.exports = pool.promise();