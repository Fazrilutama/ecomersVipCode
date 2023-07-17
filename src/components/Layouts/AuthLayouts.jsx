import React from "react";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex flex-col max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2 ">{title} </h1>
        <p className="font-medium text-slate-700 mb-8">
          Welcome Please Enter your Details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
