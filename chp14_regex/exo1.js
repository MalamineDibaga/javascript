function email_valide(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

console.log(email_valide("abc.bdd@gmail.i")); 
console.log(email_valide("email@invalide.com"));     