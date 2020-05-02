/** @format */

import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import RangeFilter from "../UI Components/RangeFilter";
import Spotify from "spotify-web-api-js";
import FilteredSongs from "../UI Components/FilteredSongs";
import GenresModal from "../UI Components/GenresModal";

const spotifyApi = new Spotify();

export default function SongsRecommandationSlide() {
  const [danceability, setDanceability] = useState(0.5);
  const [energy, setEnergy] = useState(0.5);
  const [speachiness, setSpeachiness] = useState(0.5);
  const [acousticness, setAcousticness] = useState(0.5);
  const [loudness, setLoudness] = useState(0.5);
  const [valence, setValence] = useState(0.5);

  const [isActive, setActive] = useState(false);
  const [seedGenres, changeGenres] = useState([
    "dance",
    "hip-hop",
    "pop",
    "summer",
  ]);

  const ref = useRef();

  const [items, setItems] = useState(undefined);

  useEffect(() => {
    fetchRecommomandations();
  }, [
    danceability,
    energy,
    speachiness,
    loudness,
    valence,
    acousticness,
    seedGenres,
  ]);

  const fetchRecommomandations = async () => {
    const res = await spotifyApi.getRecommendations({
      limit: 50,
      seed_genres: seedGenres,
      energy: energy,
      speachiness: speachiness,
      danceability: danceability,
      valence: valence,
      loudness: loudness,
      acousticness: acousticness,
    });

    setItems(res);
  };

  return (
    <Background>
      <div>
        {isActive && (
          <GenresModal
            seedGenres={seedGenres}
            changeGenres={changeGenres}
            setActive={setActive}
          ></GenresModal>
        )}
        <div id="filters">
          <GenresButton>
            <div id="gradient" onClick={() => setActive(!isActive)}>
              Genres
            </div>
          </GenresButton>
          <label htmlFor="danceability">Danceability</label>
          <RangeFilter
            name="danceability"
            onChange={setDanceability}
          ></RangeFilter>
          <label htmlFor="energy">Energy</label>
          <RangeFilter name="danceability" onChange={setEnergy}></RangeFilter>
          <label htmlFor="speachiness">Speachiness</label>
          <RangeFilter
            name="speachiness"
            onChange={setSpeachiness}
          ></RangeFilter>
          <label htmlFor="acousticness">Acousticness</label>
          <RangeFilter
            name="acousticness"
            onChange={setAcousticness}
          ></RangeFilter>
          <label htmlFor="loudness">Loudness</label>
          <RangeFilter name="loudness" onChange={setLoudness}></RangeFilter>
          <label htmlFor="valence">Valence</label>
          <RangeFilter name="valence" onChange={setValence}></RangeFilter>
        </div>
      </div>
      <FilteredSongs items={items && items}></FilteredSongs>
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  background-color: rgb(23, 23, 23);
  color: white;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  #filters {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    label {
      color: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
      margin-top: 30px;
      margin-bottom: 30px;
      font-weight: bold;
    }
  }
`;

const GenresButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  #gradient {
    background-color: transparent;
    display: inline-block;
    padding: 12px 25px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-align: center;
    letter-spacing: 10px;
    line-height: 17px;
    color: white;
    border: 4px solid;
    border-image-source: linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    border-image-slice: 1;
    cursor: pointer;
  }
`;
