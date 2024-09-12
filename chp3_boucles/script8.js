let person = {firstName: "Malamine", lastName: "Dibaga", age: 19};
for (let persons in person) {
    console.log(`${persons}: ${person[persons]} (type: ${typeof person[persons]})`);
    }

