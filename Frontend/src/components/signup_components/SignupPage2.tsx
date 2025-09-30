/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import { useRef } from "react";

type Props = {
  processPage2Details: (details: {password: string}) => Promise<void>;
  navigateToPreviousPage: () => void | Promise<void>;
};

const SignupPage2 = (props: Props) => {
  const passwordField = useRef<HTMLInputElement>(null);
  const confirmPasswordField = useRef<HTMLInputElement>(null);

  const handleNextButtonClick = (event :React.MouseEvent<HTMLButtonElement>) :void => {
    // Preventing the default action
    event.preventDefault();

    // Checking that all fields are filled
    if(
        passwordField.current?.value === '' &&
        confirmPasswordField.current?.value === ''
    ){
        return;
    }

    // Removing the white spaces
    passwordField.current!.value = passwordField.current!.value.trim();
    confirmPasswordField.current!.value = confirmPasswordField.current!.value.trim();

    // is Password equal to confirm password
    if(passwordField.current!.value !== confirmPasswordField.current!.value) return;

    // Sending the details to parent for further processing
    props.processPage2Details({password: passwordField.current!.value});
  }

  const handlePreviousButtonClick = (event :React.MouseEvent<HTMLButtonElement>) :void => {
    event.preventDefault();
    props.navigateToPreviousPage();
  }

  return (
    <form action="">
      <label htmlFor="password">Enter your Password</label>
      <input type="password" ref={passwordField} className="input-field" />

      <label htmlFor="password">Confirm your Password</label>
      <input type="password" ref={confirmPasswordField} className="input-field" />

      <button onClick={handlePreviousButtonClick} className="button-1">Previous</button>
      <button onClick={handleNextButtonClick} className="button-1">Next</button>
    </form>
  )
}

export default SignupPage2;