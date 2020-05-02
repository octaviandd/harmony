/** @format */

import React from "react";
import WelcomeSlide from "../Slides/WelcomeSlide";
import ArtistsGraphSlide from "../Slides/ArtistsGraphSlide";
import GenresSlide from "../Slides/GenresSlide";
import styled from "styled-components";
import TopSongsSlide from "../Slides/TopSongsSlide";
import SongDeconstructionSlide from "../Slides/SongDeconstructionSlide";
import SongsRecommandationSlide from "../Slides/SongsRecommandationSlide";
import ProfileSlide from "../Slides/ProfileSlide";
export default function Home({
  userTopArtistsAllTime,
  userTopArtists6Months,
  userTopArtistsFourWeeks,
}) {
  return (
    <Swipes>
      <WelcomeSlide></WelcomeSlide>
      <ProfileSlide></ProfileSlide>
      <ArtistsGraphSlide
        userTopArtistsAllTime={userTopArtistsAllTime}
        userTopArtists6Months={userTopArtists6Months}
        userTopArtistsFourWeeks={userTopArtistsFourWeeks}
      ></ArtistsGraphSlide>
      <GenresSlide userTopArtistsAllTime={userTopArtistsAllTime}></GenresSlide>
      <TopSongsSlide></TopSongsSlide>
      <SongDeconstructionSlide></SongDeconstructionSlide>
      <SongsRecommandationSlide></SongsRecommandationSlide>
    </Swipes>
  );
}

const Swipes = styled.div`
  overflow: hidden;
`;
