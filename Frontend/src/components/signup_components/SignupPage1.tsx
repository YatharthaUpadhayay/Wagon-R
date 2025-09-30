/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay
 */

import { useRef } from "react";

type Props = {
  processPage1Details: (details: {
    name: string;
    email: string;
    username: string;
    userType: string;
  }) => Promise<void>;
};

const SignupPage1 = (props: Props) => {
  const nameField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const usernameField = useRef<HTMLInputElement>(null);
  const userTypeField = useRef<HTMLSelectElement>(null);

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    // Preventing the default action
    event.preventDefault();

    // Checking that all fields are filled
    if (
      nameField.current?.value === "" &&
      emailField.current?.value === "" &&
      usernameField.current?.value === ""
    ) {
      return;
    }

    // Removing the white spaces
    nameField.current!.value = nameField.current!.value.trim();
    emailField.current!.value = emailField.current!.value.trim();
    usernameField.current!.value = usernameField.current!.value.trim();

    // Sending the details to parent for further processing
    props.processPage1Details({
      name: nameField.current!.value,
      email: emailField.current!.value,
      username: usernameField.current!.value,
      userType: userTypeField.current!.value,
    });
  };

  return (
    <form>
      <label htmlFor="name">Enter your name</label>
      <input type="text" ref={nameField} className="input-field" />

      <label htmlFor="username">Enter your username</label>
      <input type="text" ref={usernameField} className="input-field" />

      <label htmlFor="email">Enter your email</label>
      <input type="text" ref={emailField} className="input-field" />

      <label htmlFor="name">Select your userType</label>
      <select ref={userTypeField} className="select-field">
        <option value="student">student</option>
        <option value="teacher">teacher</option>
      </select>

      <button onClick={handleNextButtonClick} className="button-1">Next</button>
    </form>
  );
};

export default SignupPage1;
