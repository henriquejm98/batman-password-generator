export default function generatePass() {
    let password: string = '';
    let characters: string = 'Aa@$#123456789ABCDEFGHIJabcdefghijklmnOPQrs!';
    let passWordLength = 8;

    for (let i = 0; i < passWordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return password;
}