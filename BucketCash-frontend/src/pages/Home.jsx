import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Logo />
      <div>
        <Button text="Login" color={"#548164"} click={() => {
          navigate('/login')
        }}
        />
        <Button text="Register" color={"#548164"} click={() => {
          navigate('/register')
        }}/>
      </div>
    </div>
  );
};
