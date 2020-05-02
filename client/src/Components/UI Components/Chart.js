/** @format */

import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";

export default function Chart({ data1, data2, data3 }) {
  const [artistsData, setData] = useState(data1);
  const ref = useRef();

  const createGraph = (data) => {
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = 1360 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var x = d3.scaleBand().range([0, width]).padding(0.1);
    var y = d3.scaleLinear().range([height, 0]);

    var svg = d3
      .select(ref.current)
      .append("svg")
      .attr("id", "chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(
      data.map(function (d) {
        return d.name;
      })
    );
    y.domain([
      0,
      d3.max(data, function (d) {
        return d.number;
      }),
    ]);

    // append the rectangles for the bar chart

    const bars = svg.selectAll().data(data).enter().append("rect");

    bars
      .attr("class", "bar")
      .attr("x", function (d) {
        return x(d.name);
      })
      .attr("width", x.bandwidth())
      .attr("y", function (d) {
        return y(d.number);
      })
      .attr("fill", "pink")
      .attr("height", function (d) {
        return height - y(d.number);
      })

      .on("mouseenter", function (actual, i) {
        d3.select(this).attr("opacity", 0.5);
        d3.select(this)
          .transition()
          .duration(300)
          .attr("opacity", 0.6)
          .attr("x", (a) => x(a.name) - 5)
          .attr("width", x.bandwidth() + 10);
      })
      .on("mouseleave", function (actual, i) {
        d3.select(this).attr("opacity", 1);
        d3.select(this)
          .transition()
          .duration(300)
          .attr("opacity", 1)
          .attr("x", (a) => x(a.name))
          .attr("width", x.bandwidth());
      });

    svg
      .selectAll("image")
      .data(data)
      .enter()
      .append("svg:image")
      .attr("xlink:href", function (d) {
        return d.icon;
      })
      .attr("x", function (d) {
        return x(d.name) + 20;
      })
      .attr("y", function (d) {
        return y(d.number);
      })
      .attr("width", 40)
      .attr("height", 40);

    svg
      .selectAll("rating")
      .attr("id", "text")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "divergence")
      .attr("x", (d) => x(d.name) + 30)
      .attr("y", (d) => y(d.number) + 70)
      .text(function (d) {
        return d.number;
      })
      .style("fill", "black");

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g").call(d3.axisLeft(y));

    //remove
    // svg.selectAll("*").remove();
  };

  useEffect(() => {
    createGraph(artistsData);
  }, [artistsData]);

  const set6MonthsData = () => {
    setData(data2);
    console.log(artistsData);
    createGraph(artistsData);
  };

  const setAllTimeData = () => {
    setData(data1);
    console.log(artistsData);
    createGraph(artistsData);
  };

  const setLastWeekData = () => {
    setData(data3);
    createGraph(artistsData);
  };

  return (
    <React.Fragment>
      <Filter>
        {/* <h2>By</h2> */}
        <span>How popular are your favorite artists?</span>
        <div>
          <span>Period</span>
          <button onClick={() => setLastWeekData()}>Four Week</button>
          <button onClick={() => set6MonthsData()}>Six Months</button>
          <button onClick={() => setAllTimeData()}>All Time</button>
        </div>
      </Filter>
      <div style={{ marginLeft: "50px", marginTop: "200px" }} ref={ref}></div>
    </React.Fragment>
  );
}

const Filter = styled.div`
  margin: 60px 0px 40px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  span {
    border: 1px solid white;
    border-radius: 10px;
    margin-right: 20px;
    margin-left: 60px;
    padding: 10px 20px;
    background-color: rgb(22, 22, 22);
  }

  button {
    background-color: inherit;
    color: white;
    border: 1px solid white;
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.35s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;
