document.getElementById("monBouton").addEventListener("click", function() {

    let nouveau_paragraphe = document.createElement("p");
    nouveau_paragraphe.textContent = "C'est un nouveau paragraphe";
    
    document.getElementById("div1").appendChild(nouveau_paragraphe);

});