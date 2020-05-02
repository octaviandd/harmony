/** @format */

import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function RangeFilter({ onChange }) {
  const ref = useRef();
  const [value, setValue] = useState();
  const min = 0;
  const max = 100;

  const checkStatus = (status) => {
    if (status > 20 && status < 40) {
      ref.current.classList.remove("purple");
      ref.current.classList.remove("blue");
      ref.current.classList.remove("pink");
      ref.current.classList.add("ltpurple");
    } else if (status > 40 && status < 60) {
      ref.current.classList.remove("ltpurple");
      ref.current.classList.remove("blue");
      ref.current.classList.remove("pink");
      ref.current.classList.add("purple");
    } else if (status > 60) {
      ref.current.classList.remove("purple");
      ref.current.classList.remove("blue");
      ref.current.classList.remove("ltpurple");
      ref.current.classList.add("pink");
    } else if (status < 20) {
      ref.current.classList.remove("purple");
      ref.current.classList.remove("pink");
      ref.current.classList.remove("ltpurple");
      ref.current.classList.add("blue");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(value);
    return e.target.value;
  };

  return (
    <Range
      onMouseUp={handleChange}
      type="range"
      name="danceability"
      className={`${checkStatus(value)} range blue`}
      ref={ref}
      min={min}
      max={max}
    ></Range>
  );
}

const Range = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: 0;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background: rgba(59, 173, 227, 1);
    background: -moz-linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    background: -webkit-gradient(
      left bottom,
      right top,
      color-stop(0%, rgba(59, 173, 227, 1)),
      color-stop(25%, rgba(87, 111, 230, 1)),
      color-stop(51%, rgba(152, 68, 183, 1)),
      color-stop(100%, rgba(255, 53, 127, 1))
    );
    background: -webkit-linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    background: -o-linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    background: -ms-linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    background: linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3bade3 ', endColorstr='#ff357f ', GradientType=1 );
    height: 2px;
  }

  &::-moz-range-track {
    -moz-appearance: none;
    background: rgba(59, 173, 227, 1);
    background: -moz-linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    background: -webkit-gradient(
      left bottom,
      right top,
      color-stop(0%, rgba(59, 173, 227, 1)),
      color-stop(25%, rgba(87, 111, 230, 1)),
      color-stop(51%, rgba(152, 68, 183, 1)),
      color-stop(100%, rgba(255, 53, 127, 1))
    );
    background: -webkit-linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    background: -o-linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    background: -ms-linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    background: linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3bade3 ', endColorstr='#ff357f ', GradientType=1 );
    height: 2px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    max-width: 80px;
    position: relative;
    bottom: 11px;
    background-color: #1d1c25;
    cursor: -webkit-grab;

    -webkit-transition: border 1000ms ease;
    transition: border 1000ms ease;
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    border: 2px solid;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    max-width: 80px;
    position: relative;
    bottom: 11px;
    background-color: #1d1c25;
    cursor: -moz-grab;
    -moz-transition: border 1000ms ease;
    transition: border 1000ms ease;
  }

  &::-webkit-slider-thumb:active {
    cursor: -webkit-grabbing;
  }
  &::-moz-range-thumb:active {
    cursor: -webkit-grabbing;
  }
`;
