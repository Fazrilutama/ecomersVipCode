import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";


const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-sm text-center">
        have an account{" "}
        <Link
          to="/login"
          className="font-bold mt-5 text-center text-blue-600 "
        >
          Login
        </Link>{" "}
      </p>
    </AuthLayouts>
  );
};
export default RegisterPage; 