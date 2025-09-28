import { useState } from "react";
import SignupPage1 from "../components/signup_components/SignupPage1";

import FormatChecker from "../utils/formatChecker";


export default function Signup() {
  const [userDetails, setUserDetails] = useState({});

  // Functions to process details
  const processPage1Details = (details :{username:string, email:string}) :void => {
      const {username, email} = details;

      // Verifying username format
      const isUsernameFormatCorrect :boolean = FormatChecker.isUsernameFormatCorrect(username);

      // Verifying gmail format
      const isEmailFormatCorrect :boolean = FormatChecker.isEmailFormatCorrect(email);

      // Does the username already exist
      const isUsernameUnique :boolean = false;

      if(
        isUsernameFormatCorrect &&
        isEmailFormatCorrect &&
        isUsernameUnique
      ){
        // Storing the details
        setUserDetails({...userDetails, ...details});
        
        // Move to page 2
      }
      else {
        // Displaying the error message
        ()=>alert("Please enter correct values");
      }
      
  }
  
  // const processPage2Details = () :void => {}
  
  // const processPage3Details = () :void => {}
  
  return (
    <div>
      <span>Login</span>
      <span>Signup</span>
      <SignupPage1 processPage1Details={processPage1Details} />
    </div>
  )
}