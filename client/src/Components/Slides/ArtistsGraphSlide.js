/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "../UI Components/Chart";
import Spotify from "spotify-web-api-js";

const spotifyApi = new Spotify();

export default function ArtistsGraphSlide({}) {
  const [items, setItems1] = useState(undefined);
  const [items2, setItems2] = useState(undefined);
  const [items3, setItems3] = useState(undefined);

  useEffect(() => {
    getUserTopArtists();
  }, []);

  const getUserTopArtists = async () => {
    await spotifyApi
      .getMyTopArtists({ limit: 15, time_range: "long_term" })
      .then((result) => {
        setItems1(result);
      });
    await spotifyApi
      .getMyTopArtists({ limit: 15, time_range: "short_term" })
      .then((result) => {
        setItems2(result);
      });
    await spotifyApi
      .getMyTopArtists({ limit: 15, time_range: "medium_term" })
      .then((result) => {
        setItems3(result);
      });
  };

  let data1 = [];
  let data2 = [];
  let data3 = [];

  items &&
    items.items.map((item) =>
      data1.push({
        name: item.name,
        number: item.popularity,
        icon: item.images[2].url,
      })
    );

  items2 &&
    items2.items.map((item) =>
      data2.push({
        name: item.name,
        number: item.popularity,
        icon: item.images[2].url,
      })
    );

  items3 &&
    items3.items.map((item) =>
      data1.push({
        name: item.name,
        number: item.popularity,
        icon: item.images[2].url,
      })
    );

  return (
    <React.Fragment>
      <MainContainer>
        {items ? (
          <Chart
            data1={items && data1}
            data2={items && data2}
            data3={items && data3}
          ></Chart>
        ) : (
          <div>Token Required</div>
        )}
      </MainContainer>
    </React.Fragment>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(23, 23, 23);
  color: white;
`;
