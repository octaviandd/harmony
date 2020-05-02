/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArtistsList from "../UI Components/ArtistsList";
import PlaylistList from "../UI Components/PlaylistList";
import ArtistsModal from "../UI Components/ArtistsModal";

import Spotify from "spotify-web-api-js";
import PicSVG from "../UI Components/PicSVG";

const spotifyApi = new Spotify();

export default function ProfileSlide() {
  const [user, setUser] = useState(undefined);
  const [artists, setArtists] = useState(undefined);
  const [playlists, setPlaylists] = useState(undefined);
  const [isShowing, show] = useState(false);

  useEffect(() => {
    getUser();
    getArtists();
    getPlaylists();
  }, []);

  const getUser = async () => {
    const res = await spotifyApi.getMe();
    setUser(res);
  };

  const getArtists = async () => {
    let res = await spotifyApi.getFollowedArtists({ limit: "50" });
    setArtists(res);
  };

  const getPlaylists = async () => {
    let res = await spotifyApi.getUserPlaylists();
    setPlaylists(res);
  };

  const showMoreArtists = () => {
    show(!isShowing);
  };

  return (
    <Background
    // style={{
    //   backgroundColor: isShowing ? "rgba(22,22,22,0.9)" : "rgba(22,22,22,1)",
    // }}
    >
      {user && (
        <Profile>
          <ProfileImage>
            <img src={`${user.images[0].url}`} alt="profile_image"></img>
          </ProfileImage>
          <ProfileDetails>
            <span>{user.display_name}</span>
            <a
              href={`${user.external_urls.spotify}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PicSVG></PicSVG>
            </a>
            <span>{user.followers.total} followers</span>
          </ProfileDetails>
        </Profile>
      )}
      <Flex>
        <ArtistsList
          artists={artists && artists}
          showMoreArtists={showMoreArtists}
        ></ArtistsList>
        <PlaylistList playlists={playlists && playlists}></PlaylistList>
      </Flex>
      {isShowing && (
        <ArtistsModal
          artists={artists && artists}
          showMoreArtists={showMoreArtists}
        ></ArtistsModal>
      )}
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  background-color: rgb(23, 23, 23);
  color: white;
  position: relative;
`;

const Flex = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding-top: 50px;

  span {
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 15px;
    background-color: rgb(22, 22, 22);
    color: white;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  display: inline-block;
  width: 201px;
  height: 201px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 50px;

  img {
    max-width: 100%;
  }
`;

const ProfileDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  align-items: center;

  &:hover {
    svg {
      fill: #20d760;
    }
  }
`;
