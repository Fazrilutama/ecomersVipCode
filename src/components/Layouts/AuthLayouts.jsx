import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  {

    console.log(isDarkMode);
  }
  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <div className="flex flex-col max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
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
