document.getElementById("monBouton").addEventListener("click", function() {
    let p2 = document.getElementById("p2");
    if (p2) {
        let h2 = document.createElement("h2");
        h2.textContent = "Ceci est un nouvel élément <h2>.";
        p2.replaceWith(h2);
    }
})