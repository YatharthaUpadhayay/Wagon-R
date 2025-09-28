function isUsernameFormatCorrect(username :string) :boolean {
    // Checking the username is in lowercase or not
    const isLowerCase :boolean = username === username.toLowerCase();

    // Checking if the username contains any special characters
    const regex :RegExp = /^[a-z]+$/;
    const containsOnlyAlphabets :boolean = regex.test(username);
    
    return isLowerCase && containsOnlyAlphabets && username.length <= 30;
}

function isEmailFormatCorrect(email :string) :boolean {
    // Checking if the email is lowercase or not
    const isLowerCase :boolean = email === email.toLowerCase();

    // Checking if the email format is correct
    const emailFormatRegex :RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidSyntax :boolean = email.match(emailFormatRegex) === null;

    return isLowerCase && isValidSyntax;
}

const FormatChecker = {
    isUsernameFormatCorrect,
    isEmailFormatCorrect
}

export default FormatChecker;