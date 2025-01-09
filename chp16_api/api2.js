document.getElementById('verif').addEventListener('click', () => {
    const mac = document.getElementById('mac').value;
    if (!mac) {
        document.getElementById('resultat').textContent = 'Veuillez saisir une adresse MAC.';
        return;
    }

    const macRegex = /^([0-9A-Fa-f]{2}[:]){5}[0-9A-Fa-f]{2}$/;
    if (!macRegex.test(mac)) {
        document.getElementById('resultat').textContent = "L'adresse MAC n'est pas valide.";
        return;
    }

    fetch(`https://api.macvendors.com/${mac}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImp0aSI6ImE5YTBlNGFlLWM5ODYtNGNhZS04NTQ0LWI4YWVkNDNjYzBjMyJ9.eyJpc3MiOiJtYWN2ZW5kb3JzIiwiYXVkIjoibWFjdmVuZG9ycyIsImp0aSI6ImE5YTBlNGFlLWM5ODYtNGNhZS04NTQ0LWI4YWVkNDNjYzBjMyIsImlhdCI6MTczMTA1MTM3NSwiZXhwIjoyMDQ1NTQ3Mzc1LCJzdWIiOiIxNTE1OCIsInR5cCI6ImFjY2VzcyJ9.NeYrYsR0IGLfW9gqKrPUVBaBnI1mSLXZz1tm-e9lz-zSUJZfBjrG3klPyTqUts3WlB8vlwmokuOMLuhmak-aSg'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return response.text();  
    })
    .then(data => {
        document.getElementById('resultat').textContent = `Fabricant = ${data}`;
    })
    .catch(error => {
        document.getElementById('resultat').textContent = 'Erreur.';
        console.error('Erreur:', error);
    });
});
