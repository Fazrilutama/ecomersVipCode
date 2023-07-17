import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-sm text-center">
        Dont have an account.?{" "}
        <Link
          to="/register"
          className="font-bold mt-5 text-center text-blue-600 "
        >
          Sign up
        </Link>{" "}
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
