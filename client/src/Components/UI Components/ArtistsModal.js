/** @format */

import React from "react";
import styled from "styled-components";
import PicSVG from "../UI Components/PicSVG";

export default function ArtistsModal({ showMoreArtists, artists }) {
  return (
    <Modal>
      <span onClick={() => showMoreArtists()}>X</span>
      {artists &&
        artists.artists.items.slice(6).map((artist) => {
          return (
            <div>
              <ArtistImage img={artist.images[2].url}></ArtistImage>
              <a
                href={`${artist.external_urls.spotify}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PicSVG></PicSVG>
              </a>
            </div>
          );
        })}
    </Modal>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 400px;
  border: 1px solid rgb(22, 22, 22);
  color: rgb(22, 22, 22);
  background-image: repeating-linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 31px,
      rgba(0, 0, 0, 0.03) 31px,
      rgba(0, 0, 0, 0.03) 32px,
      transparent 32px,
      transparent 92px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 31px,
      rgba(0, 0, 0, 0.03) 31px,
      rgba(0, 0, 0, 0.03) 32px,
      transparent 32px,
      transparent 92px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 31px,
      rgba(0, 0, 0, 0.03) 31px,
      rgba(0, 0, 0, 0.03) 32px,
      transparent 32px,
      transparent 92px
    ),
    linear-gradient(90deg, hsl(344, 0%, 100%), hsl(344, 0%, 100%));
  overflow: scroll;
  border-radius: 10px;

  span {
    position: relative;
    font-weight: bold;
    font-size: 20px;
    right: -15px;
    top: 15px;
    cursor: pointer;
    border: 1px solid rgb(22, 22, 22);
    padding: 4px 7.5px;
    border-radius: 5px;
  }

  div {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ArtistProfile = styled.div`
  height: 80px;
  width: 80px;
  margin-left: 30px;
`;

const ArtistImage = styled.div`
  height: 80px;
  width: 80px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 5px;

  a {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: 12px;
    display: none;
  }

  &:hover {
    a {
      display: block;
    }
  }

  &:hover ${ArtistProfile} {
    opacity: 0.4;
  }
`;
