document.getElementById("monBouton").addEventListener("click", function() {
    let p2 = document.getElementById("p2");
    let div2 = document.getElementById("div2");
    if (p2 && div2) {
        div2.appendChild(p2);
    }
});