/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import { useRef } from "react";

type Props = {
  processPage3Details: (details: {passwordResetQuestion: string, passwordResetAnswer: string}) => Promise<void>;
  navigateToPreviousPage: () => void | Promise<void>;
};

const SignupPage3 = (props: Props) => {
  const passwordResetAnswerField = useRef<HTMLInputElement>(null);
  const passwordResetQuestionField = useRef<HTMLSelectElement>(null);

  const handleNextButtonClick = (event :React.MouseEvent<HTMLButtonElement>): void => {
    // Preventing the default action
    event.preventDefault();

    // Checking that all fields are filled
    if(passwordResetAnswerField.current?.value === "") return;

    // Removing the white space
    passwordResetAnswerField.current!.value = passwordResetAnswerField.current!.value.trim();

    // Sending the details to parent for further processing
    props.processPage3Details({
      passwordResetQuestion: passwordResetQuestionField.current!.value,
      passwordResetAnswer: passwordResetAnswerField.current!.value
    });
  };

  const handlePreviousButtonClick = (event :React.MouseEvent<HTMLButtonElement>) :void => {
    event.preventDefault();
    props.navigateToPreviousPage();
  }

  return (
    <form action="">
      <select ref={passwordResetQuestionField} className="select-field">
        <option value="Question1">Question1</option>
        <option value="Question2">Question2</option>
        <option value="Question3">Question3</option>
        <option value="Question4">Question4</option>
      </select>

      <label htmlFor="passwordResetAnswer">Enter the Answer</label>
      <input type="text" ref={passwordResetAnswerField} className="input-field" />

      <button onClick={handlePreviousButtonClick} className="button-1">Previous</button>
      <button onClick={handleNextButtonClick} className="button-1">Next</button>
    </form>
  );
};

export default SignupPage3;
