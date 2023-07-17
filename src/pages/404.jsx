import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-3xl font-bold ">Ups</h1>
      <p className="my-5 text-xl">Sorry, unexpected error has occured</p>
      <p className="text-lg">{error.statusText || error.massage}</p>
    </div>
  );
};

export default ErrorPage;
