/**
 * Fields to add:
 * 1. password
 * 2. confirm password
 */

import { useRef } from "react";

type Props = {
  processPage2Details: () => void
};

const SignupPage2 = (props: Props) => {
  const passwordField = useRef<HTMLInputElement>(null);
  const confirmPasswordField = useRef<HTMLInputElement>(null);

  const handleNextButtonClick = () :void => {
    props.processPage2Details();
  }

  return (
    <form action="">
      <label htmlFor="password">Enter your Password</label>
      <input type="password" ref={passwordField} />

      <label htmlFor="password">Confirm your Password</label>
      <input type="password" ref={confirmPasswordField} />

      <button>Previous</button>
      <button onClick={handleNextButtonClick}>Next</button>
    </form>
  )
}

export default SignupPage2;