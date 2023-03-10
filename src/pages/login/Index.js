import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Background } from "../../components/Background";
import { Modal } from "../../components/Modal";
import { WatchlistLogo } from "../../components/WatchlistLogo";

import { CreateAccountForm } from "./CreateAccountForm";
import { useNavigate } from "react-router-dom";
import { LoginAccountForm } from "./LoginAccountForm";
import { GoogleButton } from "./GoogleButton";
export default function LoginPage({ action }) {
  const navigate = useNavigate();

  return (
    <>
      <Background>
        <Modal
          isVisible={true}
          closeFunction={() => {
            navigate("/");
          }}
        >
          <FormWrappler>
            <WatchlistLogo size={"68px"} />
            <h2>
              <b>Two taps</b> on <b>any movie</b>, and it's <b>on your</b>{" "}
              <b>Watchlist!</b>
            </h2>
            <FormType type={action} navigate={navigate} />
          </FormWrappler>
        </Modal>
      </Background>
    </>
  );
}

function FormType({ type, navigate }) {
  if (type === "signup") {
    return (
      <>
        <CreateAccountForm />
        <h3 onClick={() => navigate("/login")}>
          Already have an account? Log in.
        </h3>
      </>
    );
  }
  if (type === "login") {
    return (
      <>
        <LoginAccountForm />
        <GoogleButton />
        <h3 onClick={() => navigate("/signup")}>
          Do not have an account yet? Try login through google or click here.
        </h3>
      </>
    );
  }
}

const FormWrappler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
  h2 {
    margin-top: 10px;
    text-align: center;
    margin-bottom: 50px;
    color: white;
    b:first-of-type {
      color: #de0f62;
    }
    b:nth-of-type(2) {
      color: #fe6828;
    }
    b:nth-of-type(3) {
      color: #fe6828;
    }
    b:nth-of-type(4) {
      color: #de0f62;
    }
  }
  h3 {
    text-align: center;
    margin-top: 15px;
    text-decoration: underline;
    color: #de0f62;
    cursor: pointer;
  }
  form {
    display: flex;
    flex-direction: column;
    label {
      font-size: 20px;
      color: #fe6828;
    }
    p {
      color: red;
      margin-bottom: 10px;
      margin-bottom: 15px;
    }
    input {
      width: 500px;
      height: 40px;
      border-radius: 10px;
      &:focus {
        outline-color: #de0f62;
      }
      font-size: 16px;
    }
    img {
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
    }
    @media screen and (max-width: 900px) {
      h2 {
        margin-top: 10px;
        margin-bottom: 20px;
      }
      input {
        width: 50vw;
      }
    }
    @media screen and (max-width: 750px) {
      label {
        font-size: 18px;
      }
      p {
        font-size: 13px;
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 750px) {
      h2{
        margin-bottom: 20px;
      }
    }
`;
