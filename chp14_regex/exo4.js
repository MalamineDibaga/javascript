const les_emails = [
    "user@gmail.com",
    "user@yahoo.com",
    "example@gmail.com",
    "test@outlook.com"
];

const regexemail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const gmailUsers = les_emails.filter(email => regexemail.test(email));

console.log(gmailUsers); // ["user@gmail.com", "example@gmail.com"]
