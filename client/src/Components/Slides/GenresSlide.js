/** @format */

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import * as d3 from "d3";

import Spotify from "spotify-web-api-js";

const spotifyApi = new Spotify();

export default function GenresSlide() {
  const getUserTopArtists = async () => {
    const res = await spotifyApi.getMyTopArtists({
      limit: 15,
      time_range: "long_term",
    });
    getData(res);
    return getData(res);
  };

  const newref = useRef();

  useEffect(() => {
    let allItems;
    getUserTopArtists().then((res) => {
      allItems = res;
      if (Object.keys(allItems).length !== 0) createPie(allItems);
    });
  }, []);

  function getData(items) {
    let genresObj = {};
    let genres = [];
    items &&
      items.items.map((item) => {
        genres.push(item.genres[0]);
        genres.push(item.genres[1]);
      });

    if (genres.length > 1) {
      for (let value in genres) {
        let key = genres[value];
        genresObj[key] ? genresObj[key]++ : (genresObj[key] = 1);
      }
    }
    return genresObj;
  }

  const createPie = (data) => {
    if (!data) {
      return;
    }

    var width = 1000;
    var height = 600;
    var margin = 50;

    var radius = Math.min(width, height) / 2 - margin;

    var svg = d3
      .select(newref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3
      .scaleOrdinal()
      .domain(data)
      .range([
        "#6e40aa",
        "#bf3caf",
        "#fe4b83",
        "#ff7847",
        "#e2b72f",
        "#aff05b",
        "#52f667",
        "#1ddfa3",
        "#23abd8",
        "#4c6edb",
        "#6e40aa",
      ]);

    var pie = d3
      .pie()
      .sort(null) // Do not sort group by size
      .value(function (d) {
        return d.value;
      });
    var data_ready = pie(d3.entries(data));

    var arc = d3
      .arc()
      .innerRadius(radius * 0.5) // This is the size of the donut hole
      .outerRadius(radius * 0.95);

    var outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    svg
      .selectAll("allSlices")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", function (d) {
        return color(d.data.key);
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    svg
      .selectAll("allPolylines")
      .data(data_ready)
      .enter()
      .append("polyline")
      .attr("stroke", "black")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr("points", function (d) {
        var posA = arc.centroid(d); // line insertion in the slice
        var posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
        var posC = outerArc.centroid(d); // Label position = almost the same as posB
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posC];
      });

    svg
      .selectAll("allLabels")
      .data(data_ready)
      .enter()
      .append("text")
      .text(function (d) {
        return d.data.key;
      })
      .attr("transform", function (d) {
        var pos = outerArc.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return "translate(" + pos + ")";
      })
      .style("text-anchor", function (d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midangle < Math.PI ? "start" : "end";
      });
  };

  return (
    <React.Fragment>
      <Background>
        <div>
          <span>What genres do you favorite artists fit in?</span>
        </div>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
          ref={newref}
        ></div>
      </Background>
    </React.Fragment>
  );
}

const Background = styled.div`
  padding-top: 60px;
  width: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    border: 1px solid rgb(22, 22, 22);
    border-radius: 10px;
    margin-right: 20px;
    margin-left: 60px;
    padding: 10px 20px;
    background-color: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    color: rgb(22, 22, 22);
  }
`;
