function chargerDonnees() {
    const regionSelect = document.getElementById("regions");
    const departementSelect = document.getElementById("departements");
    const communeSelect = document.getElementById("communes");

    fetch(`https://geo.api.gouv.fr/regions?format=json&apiKey=TAUX_DE_VALEUR_API`)
        .then(response => response.json())
        .then(data => {
            data.forEach(region => {
                const option = document.createElement("option");
                option.value = region.code;
                option.text = region.nom;
                regionSelect.appendChild(option);
            });

            departementSelect.innerHTML = "";
            communeSelect.innerHTML = "";

            return fetch(`https://geo.api.gouv.fr/regions/${data[0].code}/departements?format=json&apiKey=TAUX_DE_VALEUR_API`);
        })
        .then(response => response.json())
        .then(data => {
            data.forEach(departement => {
                const option = document.createElement("option");
                option.value = departement.code;
                option.text = departement.nom;
                departementSelect.appendChild(option);
            });

            return fetch(`https://geo.api.gouv.fr/departements/${departementSelect.options[0].value}/communes?format=json&apiKey=TAUX_DE_VALEUR_API`);
        })
        .then(response => response.json())
        .then(data => {
            data.forEach(commune => {
                const option = document.createElement("option");
                option.value = commune.code;
                option.text = commune.nom;
                communeSelect.appendChild(option);
            });
        })
        .catch(error => console.error(error));
}

chargerDonnees();