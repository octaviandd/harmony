/** @format */

import React from "react";
import styled, { keyframes } from "styled-components";

export default function WelcomeSlide() {
  return (
    <Background>
      <Header>
        "Show me your playlist <br></br> and I'll tell you what kind of{" "}
        <span>person you are</span>"
      </Header>
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
`;

const strike = keyframes`
    0%   { width : 0; }
    100% { width: 100%; }
`;

const Header = styled.div`
  position: relative;
  display: block;
  overflow: visible;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 66px;
  font-weight: bold;

  span {
    display: inline-block;
    position: relative;
  }

  span:before {
    content: "music you should listen to";
    position: absolute;
    bottom: -20px;
    left: 140px;
    font-size: 25px;
  }

  span:after {
    content: " ";
    position: absolute;
    top: 55%;
    left: 0;
    width: 100%;
    height: 5px;
    background: #20d760;
    animation-name: ${strike};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  p {
    font-size: 32px;
  }
`;
