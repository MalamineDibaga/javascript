function mac_valide(mac) {
    const regex = /^([0-9A-Fa-f]{2}[:]){5}([0-9A-Fa-f]{2})$/;
    return regex.test(mac);
}

console.log(mac_valide("E8:B7:48:69:78:E7"));
console.log(mac_valide("G4:4E:31:E9:A6:C0")); 
