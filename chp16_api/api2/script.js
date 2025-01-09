// function boutonSoumettre() {
//     const nom = document.getElementById('nom').value;
//     const age = document.getElementById('age').value;
//     const email = document.getElementById('email').value;

//     const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const regex_age = /^(?:[1-9][0-9]?)$/; 

//     
//     fetch('http://localhost:3000/envoyer', {  // URL corrigée ici
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ nom, email, age })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Erreur de réseau');
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Erreur:', error));
// }

document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nom = document.getElementById('Nom').value;
    const email = document.getElementById('Email').value;
    const age = document.getElementById('Age').value;
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regex_age = /^(?:[1-9][0-9]?)$/; 

    if (!email_regex.test(email)) {

        alert("Email incorrect")
    }
    if (!regex_age.test(age)) {
        alert("Age incorrect(0-99)")
        return;
    }


    try {
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nom, email, age })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Utilisateur ajouté avec succès!');
        } else {
            alert(`Erreur : ${result.message}`);
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Impossible de soumettre le formulaire.');
    }
});

