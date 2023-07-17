import React from 'react'
import Button from '../Elements/Button'
import InputForm from '../Elements/Input/Index'

const FormLogin = () => {
  return (
    <form action="">
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
          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>

  )
}

export default FormLogin