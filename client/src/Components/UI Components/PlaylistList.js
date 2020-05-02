/** @format */

import React from "react";
import styled from "styled-components";
import PicSVG from "../UI Components/PicSVG";

export default function PlaylistList({ playlists }) {
  return (
    <List>
      <span id="header">Followed Playlists</span>
      {playlists &&
        playlists.items.slice(0, 6).map((playlist) => {
          return (
            <PlaylistProfile key={playlist.id}>
              <PlaylistImage img={playlist.images[0].url}>
                {playlist.images.url}
              </PlaylistImage>
              <a
                href={`${playlist.external_urls.spotify}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PicSVG></PicSVG>
              </a>
            </PlaylistProfile>
          );
        })}
      {playlists && playlists.items.length > 5 && (
        <PlusBox>
          <span></span>
          <span></span>
        </PlusBox>
      )}
    </List>
  );
}

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-content: left;
  align-items: center;

  #header {
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 15px;
    background-color: rgb(22, 22, 22);
    color: white;
    text-align: center;
  }
`;

const PlusBox = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid white;
  border-radius: 5px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    width: 2px;
    background-color: white;
    display: block;
    height: 30px;
  }

  span:nth-child(2) {
    position: relative;
    right: 2px;
    transform: rotate(90deg);
    height: 35px;
  }

  &:hover {
    opacity: 0.7;
  }
`;
const PlaylistImage = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 5px;
  transition: all 0.35s ease-in-out;
`;

const PlaylistProfile = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  margin-left: 30px;

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: none;
  }

  &:hover {
    a {
      display: block;
    }
  }

  &:hover ${PlaylistImage} {
    opacity: 0.4;
  }
`;
