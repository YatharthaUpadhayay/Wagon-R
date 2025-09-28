import { encryptPassword, encryptPasswordResetAnswer } from "../middleware/encryptDecrypt.middleware";

const createUser = async (req, res, next) => {
    try {
        // convert password to password hash
        const passwordHash = encryptPassword(req.password);
        const passwordResetAnswerHash = encryptPasswordResetAnswer(req.passwordResetAnswer);

        await User.create({
            username: req.username,
            gmail: req.gmail,
            userType: req.userType,
            name: req.name,
            passwordHash: passwordHash,
            passwordResetQuestion: req.passwordResetQuestion,
            passwordResetAnswerHash: passwordResetAnswerHash
        });

        res.send(req.username);
        res.sendStatus(200);
        
    } catch (error) {
        next(error)
    }
}


const userController = {
    createUser,
    usernameExist
}

export default userController;