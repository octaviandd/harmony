/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Spotify from "spotify-web-api-js";
import SongsGrid from "../UI Components/SongsGrid";

const spotifyApi = new Spotify();

export default function TopSongsSlide() {
  const [items, setItems] = useState();
  const [timeFrame, setTimeFrame] = useState("long_term");

  useEffect(() => {
    getUserTopTracks();
  }, [setItems, timeFrame]);

  const getUserTopTracks = async () => {
    const res = await spotifyApi.getMyTopTracks({
      limit: 15,
      time_range: timeFrame,
    });
    setItems(res);
  };

  const changePeriodShort = () => {
    setTimeFrame("short_term");
  };

  const changePeriodLong = () => {
    setTimeFrame("long_term");
  };

  const changePeriodMedium = () => {
    setTimeFrame("medium_term");
  };

  return (
    <Background>
      <Filter>
        <div>
          <span>Your top songs</span>
        </div>
        <div>
          <span>Period</span>
          <button onClick={() => changePeriodShort()}>Four Weeks</button>
          <button onClick={() => changePeriodMedium()}>Six Months</button>
          <button onClick={() => changePeriodLong()}>All Time</button>
        </div>
      </Filter>
      <SongsGrid items={items && items}></SongsGrid>
    </Background>
  );
}

const Background = styled.div`
  background-color: rgb(23, 23, 23);
  height: 100vh;
`;

const Filter = styled.div`
  padding-top: 60px;
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
    color: white;
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

    &:focus {
      outline: 0;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;
