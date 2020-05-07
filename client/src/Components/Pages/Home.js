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
import ReactPageScroller from "react-page-scroller";
import LogoSlide from "../Slides/LogoSlide";

export default function Home({
  userTopArtistsAllTime,
  userTopArtists6Months,
  userTopArtistsFourWeeks,
}) {
  return (
    // <ReactPageScroller>
    <React.Fragment>
      <LogoSlide></LogoSlide>
      {/* <WelcomeSlide></WelcomeSlide> */}
      <ProfileSlide></ProfileSlide>
      <ArtistsGraphSlide></ArtistsGraphSlide>
      <GenresSlide userTopArtistsAllTime={userTopArtistsAllTime}></GenresSlide>
      <TopSongsSlide></TopSongsSlide>
      <SongDeconstructionSlide></SongDeconstructionSlide>
      <SongsRecommandationSlide></SongsRecommandationSlide>
    </React.Fragment>
    // </ReactPageScroller>
  );
}
