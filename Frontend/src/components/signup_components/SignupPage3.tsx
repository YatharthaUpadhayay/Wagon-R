/**
 * Fields to add:
 * 1. password reset question
 * 2. password reset answer
 */

import { useRef } from "react";

type Props = {
  processPage3Details: () => void
};

const SignupPage3 = (props: Props) => {
  const passwordResetAnswerField = useRef<HTMLInputElement>(null);
  const passwordResetQuestionField = useRef<HTMLSelectElement>(null);

  const handleNextButtonClick = () :void => {
    props.processPage3Details();
  }

  return (
    <form action="">
      <select ref={passwordResetQuestionField} >
        <option value="Question1">Question1</option>
        <option value="Question2">Question2</option>
        <option value="Question3">Question3</option>
        <option value="Question4">Question4</option>
      </select>

      <label htmlFor="passwordResetAnswer">Enter the Answer</label>
      <input type="text" ref={passwordResetAnswerField} />

      <button>Previous</button>
      <button onClick={handleNextButtonClick}>Next</button>
    </form>
  )
}

export default SignupPage3;