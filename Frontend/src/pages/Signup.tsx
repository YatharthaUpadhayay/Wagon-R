/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay
 */

import { useState } from "react";
import axios from "axios";
import {
  Routes,
  Route,
  useNavigate,
  type NavigateFunction,
} from "react-router-dom";

import SignupPage1 from "../components/signup_components/SignupPage1";
import SignupPage2 from "../components/signup_components/SignupPage2";
import SignupPage3 from "../components/signup_components/SignupPage3";

import FormatChecker from "../utils/formatChecker";
import Encryption from "../utils/encryption";

const isUsernameUniqueFn = async (username: string) => {
  try {
    const response = await axios.get(`/api/user/username-exist/${username}`);
    return !response.data.exists;
  } catch (error) {
    console.log(error);
  }
};

export default function Signup() {
  const BASE_URL: string = "/signup";
  const [userDetails, setUserDetails] = useState({});
  const navigate: NavigateFunction = useNavigate();

  // Functions to process details
  const processPage1Details = async (details: {
    username: string;
    email: string;
  }): Promise<void> => {
    const { username, email } = details;

    // Verifying username format (Not sure about it)
    const isUsernameFormatCorrect: boolean =
      FormatChecker.isUsernameFormatCorrect(username);

    // Verifying gmail format (Not sure about it)
    const isEmailFormatCorrect: boolean =
      FormatChecker.isEmailFormatCorrect(email);

    // Does the username already exist
    const isUsernameUnique = await isUsernameUniqueFn(username);

    if (isUsernameFormatCorrect && isEmailFormatCorrect && isUsernameUnique) {
      // Storing the details
      setUserDetails({ ...userDetails, ...details });

      // Move to page 2
      navigate(`2`);
    } else {
      // Displaying the error message
      alert("Please enter correct values");
    }
  };

  const processPage2Details = async (details: {
    password: string;
  }): Promise<void> => {
    // Checking the password format
    const isPasswordFormatCorrect = FormatChecker.isPasswordFormatCorrect(
      details.password
    );

    // Further processing and storing the results in userDetails
    if (isPasswordFormatCorrect) {
      // Encrypting the password
      const passwordHash = Encryption.encryptPassword(details.password);

      // storing the value
      setUserDetails({
        ...userDetails,
        passwordHash: passwordHash,
      });

      // Move to page 3
      navigate(`3`);
    } else {
      alert("Enter the correct value");
    }
  };

  const processPage3Details = async (details: {
    passwordResetQuestion: string;
    passwordResetAnswer: string;
  }): Promise<void> => {
    // Checking the answer format
    const isPasswordResetAnswerFormatCorrect =
      FormatChecker.isPasswordResetAnswerFormatCorrect(
        details.passwordResetAnswer
      );

    // Encrypting and Storing the details and creating the user
    if (isPasswordResetAnswerFormatCorrect) {
      const passwordResetAnswerHash = Encryption.encryptPasswordResetAnswer(
        details.passwordResetAnswer
      );

      setUserDetails({
        ...userDetails,
        passwordResetAnswerHash: passwordResetAnswerHash,
        passwordResetQuestion: details.passwordResetQuestion,
      });

      // Create a user here
    } else {
      console.log("Enter the correct values");
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div>
        <div>
          <span className="text-3xl">Login</span>
          <span className="text-3xl">Signup</span>
        </div>
        <Routes>
          <Route
            path={`/`}
            element={<SignupPage1 processPage1Details={processPage1Details} />}
          />
          <Route
            path={`2`}
            element={
              <SignupPage2
                processPage2Details={processPage2Details}
                navigateToPreviousPage={() => navigate(`${BASE_URL}/`)}
              />
            }
          />
          <Route
            path={`3`}
            element={
              <SignupPage3
                processPage3Details={processPage3Details}
                navigateToPreviousPage={() => navigate(`${BASE_URL}/2`)}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
