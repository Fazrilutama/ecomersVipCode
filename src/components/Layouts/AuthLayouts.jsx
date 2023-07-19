import React from "react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex flex-col max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2 ">{title} </h1>
        <p className="font-medium text-slate-700 mb-8">
          Welcome Please Enter your Details
        </p>
        {children}
        <p className="text-sm text-center">
          {type === "login"
            ? "Dont have an account.?"
            : "Already have an account?"}

          {type === "login" && (
            <Link
              to="/register"
              className="font-bold mt-5 text-center text-blue-600 "
            >
              Register
            </Link>  
          )}
          {type === "register" && (
            <Link
              to="/login"
              className="font-bold mt-5 text-center text-blue-600 "
            >
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
