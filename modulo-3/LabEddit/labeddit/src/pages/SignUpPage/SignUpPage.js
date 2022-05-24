import React from "react";
import Headers from "../../components/Headers/Headers";
import useUnprotectPage from "../../hooks/useUnprotectPage";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  useUnprotectPage();

  return (
    <div>
      <Headers />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
