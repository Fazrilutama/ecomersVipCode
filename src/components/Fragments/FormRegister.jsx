import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="FullName"
        type="text"
        placeholder="insert your name here"
        name="Fullname"
      />
      <InputForm
        label="email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="password"
        type="password"
        placeholder="******"
        name="password"
      />
      <InputForm
        label="Confirm password"
        type="password"
        placeholder="******"
        name="ConfirmPassword"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
