document.getElementById('mybudgetForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    let revenus = parseFloat(document.getElementById('revenus').value) || 0; // || 0 assure que la valeur par defaut sera 0 

    let loyer = parseFloat(document.getElementById('loyer').value) || 0;
    let electricite = parseFloat(document.getElementById('electricite').value) || 0;
    let eau = parseFloat(document.getElementById('eau').value) || 0;
    let courses = parseFloat(document.getElementById('courses').value) || 0;
    let loisirs = parseFloat(document.getElementById('loisirs').value) || 0;
    let autres = parseFloat(document.getElementById('autres').value) || 0;

    let depenses = loyer + electricite + eau + courses + loisirs + autres;

 
    let solde = revenus - depenses;

    
    let resulat_de_div = document.getElementById('result');
    resulat_de_div.innerHTML = "Solde net : " + solde.toFixed(2) + " €"; // innerhtml pour inserer le texte et tofixed pour 2 chiffres apres la virgule 

    // Vérifier si le solde est positif ou négatif

    if (solde >= 0) {
        resulat_de_div.style.color = 'green'; // Solde positif
    } else {
        resulat_de_div.style.color = 'red'; // Solde négatif
    }
});
