/** @format */

import React from "react";
import mySvg from "../../hero.svg";
import { ReactSVG } from "react-svg";
import styled, { keyframes } from "styled-components";

export default function LogoSlide() {
  return (
    <div
      style={{
        backgroundColor: "#EFF0F1",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Hero>
        {/* <ReactSVG src={`${mySvg}`}></ReactSVG> */}
        <div>
          <h1 id="page-logo">HARMONY</h1>
        </div>
      </Hero>
    </div>
  );
}

const line_animation = keyframes`
    0% { transform: scaleX( 0 ); }
	15% { transform: scaleX( 0 ); }
	20%, 25% { transform: scaleX( 1 ); top: calc( 100% - 2px ); }
	50% { transform: scaleX( 1 ); top: 0px; }
	70% { transform: scaleX( 0.2 ); top: 0px; }
	80%, 100% { transform: scaleX( 0.2 ); top: 0px; }
`;

const clip_path_reveal_1 = keyframes`
0%, 25% { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%); }
	50% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); }
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: calc(100% - 2px);
      width: 100%;
      height: 4px;
      background-color: transparent;
      transform-origin: center center;
      transform: scaleX(0);
      animation: ${line_animation} 3s ease 1 alternate;
    }
  }

  #page-logo {
    font-size: 11em;
    color: #eff0f1;
    animation: ${clip_path_reveal_1} 3s ease 1 alternate;
    padding: 30px 80px;
    border-radius: 15px;
    background: linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
  }
`;
