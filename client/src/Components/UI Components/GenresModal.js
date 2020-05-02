/** @format */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Spotify from "spotify-web-api-js";

const spotifyApi = new Spotify();

export default function GenresModal({ setActive, changeGenres, seedGenres }) {
  const [genres, setGenres] = useState(undefined);
  const [genresToSelect, setGenresToSelect] = useState([]);
  const ref = useRef();

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    let res = await spotifyApi.getAvailableGenreSeeds();
    setGenres(res);
  };

  const getCheckboxValue = (e) => {
    if (e.target.checked) {
      genresToSelect.push(e.target.value);
    }
    console.log(genresToSelect);
  };

  const submitForm = (e) => {
    e.preventDefault();
    let list = genresToSelect.slice(0, 6);
    if (genresToSelect.length > 5) {
      changeGenres(list);
      ref.current.classList.remove("red");
    } else if (genresToSelect.length < 1) {
      return ref.current.classList.add("red");
    }
    console.log(genresToSelect);
    changeGenres(list);
    setActive();
    ref.current.classList.remove("red");
  };

  return (
    <Modal>
      <div>
        <form>
          {genres &&
            genres.genres.map((genre, key) => {
              return (
                <label key={key}>
                  <input
                    onChange={(e) => getCheckboxValue(e)}
                    key={key}
                    type="checkbox"
                    name={genre}
                    value={genre}
                  ></input>
                  <span>{genre}</span>
                </label>
              );
            })}
          <button type="submit" onClick={(e) => submitForm(e)} ref={ref}>
            Up to five genres
          </button>
          <button onClick={() => setActive()} id="close">
            X
          </button>
        </form>
      </div>
    </Modal>
  );
}

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  div {
    background-color: #161616;
    width: 400px;
    height: 600px;
    overflow: scroll;
    border: 4px solid;

    border-image-source: linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    border-image-slice: 1;
  }

  form {
    padding: 20px 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    button {
      position: absolute;
      top: 20px;
      right: 20px;
      font-weight: 600;
      line-height: 17px;
      background-color: rgb(23, 23, 23);
      color: white;
      border: 1px solid white;
      border-radius: 5px;
      padding: 5px 10px;
      cursor: pointer;
    }

    button:focus {
      outline: 0;
    }

    #close {
      left: 20px;
    }

    input {
      margin: 10px;
    }
  }
`;
