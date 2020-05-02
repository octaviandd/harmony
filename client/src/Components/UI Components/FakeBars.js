/** @format */

import React from "react";
import styled, { keyframes } from "styled-components";

export default function FakeBars() {
  return (
    <Bars>
      <div>Check</div>
      <div>what</div>
      <div>music</div>
      <div>you</div>
      <div>listen</div>
      <div>to</div>
    </Bars>
  );
}

const move = keyframes`
  0%{
    transform: translateX(0px);
  }
  100%{
    transform: translateX(250px);
  }
`;

const Bars = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-50%, -50%);

  div {
    display: flex;
    flex-direction: column;
  }

  div:nth-child(1) {
    position: relative;
    left: -220px;
    color: white;
    width: 300px;
    height: 50px;
    background-color: #bc5090;
    border: 1px solid transparent;
    border-radius: 30px;
    text-align: right;
    padding-right: 10px;
    line-height: 50px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    animation: ${move} 0.3s linear 1 normal forwards;
  }
  div:nth-child(2) {
    position: relative;
    left: -220px;
    color: white;
    width: 235px;
    height: 50px;
    background-color: #58508d;
    border: 1px solid transparent;
    border-radius: 30px;
    text-align: right;
    padding-right: 10px;
    line-height: 50px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    animation: ${move} 0.3s linear 1 normal 0.3s forwards;
  }
  div:nth-child(3) {
    position: relative;
    left: -220px;
    color: white;
    width: 310px;
    height: 50px;
    background-color: #ff6361;
    border: 1px solid transparent;
    border-radius: 30px;
    text-align: right;
    padding-right: 10px;
    line-height: 50px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    animation: ${move} 0.3s linear 1 normal 0.6s forwards;
  }
  div:nth-child(4) {
    position: relative;
    left: -220px;
    color: white;
    width: 200px;
    height: 50px;
    background-color: #003f5c;
    border: 1px solid transparent;
    border-radius: 30px;
    text-align: right;
    padding-right: 10px;
    line-height: 50px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    animation: ${move} 0.3s linear 1 normal 0.9s forwards;
  }
  div:nth-child(5) {
    position: relative;
    left: -260px;
    text-align: right;
    padding-right: 10px;
    color: white;
    width: 360px;
    height: 50px;
    background-color: #ffa600;
    border: 1px solid transparent;
    border-radius: 30px;
    line-height: 50px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    animation: ${move} 0.3s linear 1 normal 1.2s forwards;
  }
  div:nth-child(6) {
    position: relative;
    left: -220px;
    color: white;
    width: 180px;
    height: 50px;
    background-color: #955196;
    border: 1px solid transparent;
    border-radius: 30px;
    text-align: right;
    padding-right: 10px;
    line-height: 50px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    animation: ${move} 0.3s linear 1 normal 1.5s forwards;
  }
`;
