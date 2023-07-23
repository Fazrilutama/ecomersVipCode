import React, { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value );
    localStorage.setItem('password', event.target.password.value );
    console.log("login");
    window.location.href = "/products";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, [])


  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit ">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
