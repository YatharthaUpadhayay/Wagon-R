/**
 * Fields to add:
 * 1. name
 * 2. email
 * 3. username
 * 4. usertype
 * 5. next button
 */

import { useRef } from "react";

type Props = {
    processPage1Details: (details :{name:string, email:string, username:string, userType:string}) => void
};

const SignupPage1 = (props :Props) => {
    const nameField = useRef<HTMLInputElement>(null);
    const emailField = useRef<HTMLInputElement>(null);
    const usernameField = useRef<HTMLInputElement>(null);
    const userTypeField = useRef<HTMLSelectElement>(null);

    const handleNextButtonClick = () :void => {
        // Checking that all fields are filled
        if(
            nameField.current?.value === '' &&
            emailField.current?.value === '' &&
            usernameField.current?.value === ''
        ){
            return;
        }

        // Sending the details to parent for further processing
        props.processPage1Details({
            name: nameField.current!.value,
            email: emailField.current!.value,
            username: usernameField.current!.value,
            userType: userTypeField.current!.value
        });
    }

    return (
        <form action="">
            <label htmlFor="name">Enter your name</label>
            <input type="text" ref={nameField} />

            <label htmlFor="username">Enter your username</label>
            <input type="text" ref={usernameField} />

            <label htmlFor="email">Enter your email</label>
            <input type="text" ref={emailField} />

            <label htmlFor="name">Select your userType</label>
            <select ref={userTypeField}>
                <option value="student">student</option>
                <option value="teacher">teacher</option>
            </select>

            <button onClick={handleNextButtonClick}>Next</button>
        </form>
    )
}

export default SignupPage1;