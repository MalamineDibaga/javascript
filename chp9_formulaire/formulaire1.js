document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const adresse = document.getElementById('adresse').value;
    const ville = document.getElementById('ville').value;
    const codePostal = document.getElementById('codePostal').value;
    const table = document.getElementById('myFormTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

 
    const cellNom = newRow.insertCell(0);
    const cellPrenom = newRow.insertCell(1);
    const cellAdresse = newRow.insertCell(2);
    const cellVille = newRow.insertCell(3);
    const cellCodePostal = newRow.insertCell(4);

    
    cellNom.textContent = nom;
    cellPrenom.textContent = prenom;
    cellAdresse.textContent = adresse;
    cellVille.textContent = ville;
    cellCodePostal.textContent = codePostal;

    
    document.getElementById('myForm').reset();
});
