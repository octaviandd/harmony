/** @format */
import React from "react";
import styled, { keyframes } from "styled-components";
import { noteColor } from "../Data/data";

const Note = (props) => {
  const randomDuration = `${Math.floor(Math.random() * (20 - 12) + 12)}`;
  const randomLeft = Math.floor(Math.random() * window.innerWidth);
  const randomBottom = Math.floor(Math.random() * 400);
  const randomColor = noteColor[Math.floor(Math.random() * noteColor.length)];

  return (
    <MuzicalNote
      randomDuration={randomDuration}
      randomLeft={randomLeft}
      randomBottom={randomBottom}
      randomColor={randomColor}
    >
      {props.children}
    </MuzicalNote>
  );
};

// const rotate = keyframes`
//   0%{
//     transform: rotateX(0deg);
//   }

//   15%{
//     transform: skewX(-10deg);
//   }

//   30%{
//     transform: skewX(10deg);
//   }

//   45%{
//     transform: skewX(-10deg)
//   }
//   60%{
//     transform: skewX(10deg)
//   }
//   75%{
//     transform: skewX(-10deg)
//   }
//   90%{
//     transform: skewX(10deg)
//   }
//   100%{
//     transform: skewX(10deg)
//   }
// `;

// const moving = keyframes`
//   0%{
//     transform: scale(1);
//     opacity: 0.1
//   }

//   10%{
//     opacity: 0.4
//   }

//   100%{
//     transform: scale(1.2);
//     bottom: 1000px;
//   }
// `;

const MuzicalNote = styled.div`
  position: absolute;
  font-size: 30px;
  bottom: ${(props) => props.randomBottom}px;
  left: ${(props) => props.randomLeft}px;
  color: ${(props) => props.randomColor};
  ${"" /* animation: ${moving} ${(props) => props.randomDuration}s linear infinite,
    ${rotate} 5s linear infinite; */}
  overflow: hidden;
  z-index: 1;
`;

export default Note;
