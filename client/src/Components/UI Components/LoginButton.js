/** @format */

import React from "react";
import styled from "styled-components";

export default function LoginButton() {
  return (
    <Button>
      <a href="http://localhost:8888/login">
        <button>Login Spotify</button>
      </a>
    </Button>
  );
}

const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);

  button {
    color: white;
    cursor: pointer;
    background-color: #1eb954;
    padding: 20px 40px;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 3px;
    border: 1px solid #1eb954;
    border-radius: 30px;
    z-index: 2;
    box-shadow: 22px 15px 20px rgba(0, 0, 0, 0.3);

    &:focus {
      outline: 0;
    }

    &:hover {
      background-color: #20d760;
    }
  }
`;
