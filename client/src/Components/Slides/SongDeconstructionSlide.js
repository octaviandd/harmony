/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spotify from "spotify-web-api-js";
import CircularGraph from "../UI Components/CircularGraph";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../UI Components/AnimatedProgressProvider";

const spotifyApi = new Spotify();

export default function SongDeconstructionSlide() {
  const [energyAverage, setEnergy] = useState(undefined);
  const [danceabilityAverage, setDanceability] = useState(undefined);
  const [speachinessAverage, setSpeachiness] = useState(undefined);
  const [acousticnessAverage, setAcousticness] = useState(undefined);
  const [loudnessAverage, setLoudness] = useState(undefined);
  const [valenceAverage, setValence] = useState(undefined);
  const [durationAverage, setDuration] = useState(undefined);
  const [tempoAverage, setTempo] = useState(undefined);

  useEffect(() => {
    getTracks();
  }, []);

  const getTracks = async () => {
    let res = await spotifyApi.getMyTopTracks({
      limit: 50,
      time_range: "long_term",
    });
    let listOfIds = getIDs(res);
    getTracksInfo(listOfIds);
  };

  const getIDs = (obj) => {
    let ids = [];
    obj.items.map((item) => ids.push(item.id));
    return ids;
  };

  const getTracksInfo = async (ids) => {
    let res = await spotifyApi.getAudioFeaturesForTracks(ids);
    getAverages(res);
  };

  const getAverages = (obj) => {
    let danceabilityArray = [];
    let energyArray = [];
    let speachinessArray = [];
    let acousticnessArray = [];
    let loudnessArray = [];
    let valenceArray = [];
    let durationArray = [];
    let tempoArray = [];

    obj.audio_features.map((item) => {
      energyArray.push(item.energy);
      speachinessArray.push(item.speechiness);
      danceabilityArray.push(item.danceability);
      acousticnessArray.push(item.acousticness);
      loudnessArray.push(item.loudness);
      valenceArray.push(item.valence);
      durationArray.push(item.duration_ms);
      tempoArray.push(item.tempo);
    });
    let avgEnergy = Math.round(
      (energyArray.reduce((a, b) => a + b) / energyArray.length) * 100
    );
    let avgDanceability = Math.round(
      (danceabilityArray.reduce((a, b) => a + b) / danceabilityArray.length) *
        100
    );
    let avgSpeachiness = Math.round(
      (speachinessArray.reduce((a, b) => a + b) / speachinessArray.length) * 100
    );
    let avgAcousticness = Math.round(
      (acousticnessArray.reduce((a, b) => a + b) / acousticnessArray.length) *
        100
    );
    let avgLoudness = Math.round(
      loudnessArray.reduce((a, b) => a + b) / loudnessArray.length
    );
    let avgValence = Math.round(
      (valenceArray.reduce((a, b) => a + b) / valenceArray.length) * 100
    );
    let avgDuration = Math.round(
      durationArray.reduce((a, b) => a + b) / durationArray.length
    );

    let avgTempo = Math.round(
      tempoArray.reduce((a, b) => a + b) / tempoArray.length
    );

    setValence(avgValence);
    setLoudness(-avgLoudness * 2.2);
    setAcousticness(avgAcousticness);
    setEnergy(avgEnergy);
    setDanceability(avgDanceability);
    setSpeachiness(avgSpeachiness);
    setDuration(avgDuration);
    setTempo(avgTempo);
  };

  const secondsToMinutes = (seconds) =>
    Math.floor(seconds / 60) + ":" + ("0" + Math.floor(seconds % 60)).slice(-2);

  return (
    <div>
      <Background>
        <MainContainer>
          <DetailsContainer>
            <div id="details">
              <span>Your music in details</span>
              <div id="duration">
                <span>
                  {durationAverage && secondsToMinutes(durationAverage / 1000)}
                </span>
                <span>{tempoAverage && tempoAverage} BPM</span>
              </div>
            </div>
          </DetailsContainer>

          <GraphsGrid>
            {danceabilityAverage && (
              <CircularGraph
                background_color="h6"
                label="Danceability"
                description="Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity."
              >
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={danceabilityAverage}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles({ pathTransition: "none" })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </CircularGraph>
            )}
            {energyAverage && (
              <CircularGraph
                background_color="h5"
                label="Energy"
                description="Energy represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy."
              >
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={energyAverage}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles({
                          pathTransition: "none",
                          pathColor: "#9013FE",
                        })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </CircularGraph>
            )}
            {speachinessAverage && (
              <CircularGraph
                background_color="h4"
                label="Speachiness"
                description="Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 100 the attribute value."
              >
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={speachinessAverage}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles({
                          pathTransition: "none",
                          pathColor: "#FFC208",
                        })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </CircularGraph>
            )}

            {acousticnessAverage && (
              <CircularGraph
                background_color="h3"
                label="Acousticness"
                description="	A confidence measure from  to 100 of whether the track is acoustic. 100 represents high confidence the track is acoustic."
              >
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={acousticnessAverage}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles({
                          pathTransition: "none",
                          pathColor: "#00CC99",
                        })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </CircularGraph>
            )}
            {loudnessAverage && (
              <CircularGraph
                background_color="h2"
                label="Loudness"
                description="The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude)."
              >
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={loudnessAverage}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}dB`}
                        styles={buildStyles({
                          pathTransition: "none",
                          pathColor: "red",
                        })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </CircularGraph>
            )}
            {valenceAverage && (
              <CircularGraph
                background_color="h1"
                label="Valence"
                description="A measure from 0 to 100 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry)."
              >
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={valenceAverage}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles({
                          pathTransition: "none",
                          pathColor: "#5677FC",
                        })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </CircularGraph>
            )}
          </GraphsGrid>
        </MainContainer>
      </Background>
    </div>
  );
}

const Background = styled.div`
  height: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

  span {
    border: 1px solid rgb(22, 22, 22);
    border-radius: 10px;
    ${"" /* margin-right: 20px; */}
    ${"" /* margin-left: 60px; */}
    padding: 10px 20px;
    background-color: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    color: rgb(22, 22, 22);
  }
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  #duration {
    span {
      font-weight: bold;
    }

    padding-top: 30px;
    display: flex;
    justify-content: center;
  }
`;

const GraphsGrid = styled.div`
  display: grid;
  width: 90%;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 700px;
  margin: 0 auto;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
