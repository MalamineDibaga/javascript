document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const adresse = document.getElementById('adresse').value;
    const ville = document.getElementById('ville').value;
    const codePostal = document.getElementById('codePostal').value;

   
    if (!nom.trim() || !prenom.trim() || !adresse.trim() || !ville.trim() || !codePostal.trim()) {
        
        alert('Tous les champs sont requis. Veuillez remplir toutes les informations.');
        console       
    }

  
    const table = document.getElementById('myFormTable').getElementsByTagName('tbody')[0];
    const rangee = table.insertRow();

    const cellNom = rangee.insertCell(0);
    const cellPrenom = rangee.insertCell(1);
    const cellAdresse = rangee.insertCell(2);
    const cellVille = rangee.insertCell(3);
    const cellCodePostal = rangee.insertCell(4);

    cellNom.textContent = nom;
    cellPrenom.textContent = prenom;
    cellAdresse.textContent = adresse;
    cellVille.textContent = ville;
    cellCodePostal.textContent = codePostal;

   
    document.getElementById('myForm').reset();
});
