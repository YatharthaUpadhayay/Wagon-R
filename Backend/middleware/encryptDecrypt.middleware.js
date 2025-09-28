export function encryptPassword() {
    console.log("encryptionPassword");
}

export function decryptPassword() {
    console.log("decryptionPassword");
}

export function encryptPasswordResetAnswer() {
    console.log("encrypt password reset que");
}

export function decryptPasswordResetAnswer() {
    console.log("decrypt password reset que");
}

const encryptDecrypt = {
    encryptPassword,
    decryptPassword,
    encryptPasswordResetAnswer,
    decryptPasswordResetAnswer
}

export default encryptDecrypt;

