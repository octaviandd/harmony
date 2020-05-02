/** @format */

import React from "react";

export default function CircularGraph(props) {
  return (
    <div style={{ height: "250px" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "50%" }}>
          <h2
            className={props.background_color}
            style={{ marginBottom: "6px" }}
          >
            {props.label}
          </h2>
          <p style={{ fontSize: "14px", color: "rgb(155, 155, 155" }}>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
