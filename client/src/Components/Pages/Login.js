/** @format */

import React from "react";
import LoginButton from "../UI Components/LoginButton";
import Circle from "../UI Components/Circle";
import { dataset, colors } from "../Data/data";
import Note from "../UI Components/Note";
import styled from "styled-components";

export default function Login() {
  return (
    <Background>
      <LoginButton></LoginButton>
      <Circle dataset={dataset} colors={colors} style={{ index: "9999" }} />
      {new Array(3).fill().map((el, i) => (
        <Note key={i}>&#9835;</Note>
      ))}
      {new Array(3).fill().map((el, i) => (
        <Note key={i}>&#9833;</Note>
      ))}
      {new Array(3).fill().map((el, i) => (
        <Note key={i}>&#9839;</Note>
      ))}
      {new Array(3).fill().map((el, i) => (
        <Note key={i}>&#9834;</Note>
      ))}
    </Background>
  );
}

const Background = styled.div`
  height: 100%;
  background-image: repeating-linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 31px,
      rgba(0, 0, 0, 0.03) 31px,
      rgba(0, 0, 0, 0.03) 32px,
      transparent 32px,
      transparent 92px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 31px,
      rgba(0, 0, 0, 0.03) 31px,
      rgba(0, 0, 0, 0.03) 32px,
      transparent 32px,
      transparent 92px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 31px,
      rgba(0, 0, 0, 0.03) 31px,
      rgba(0, 0, 0, 0.03) 32px,
      transparent 32px,
      transparent 92px
    ),
    linear-gradient(90deg, hsl(344, 0%, 100%), hsl(344, 0%, 100%));
`;
