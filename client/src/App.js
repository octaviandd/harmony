/** @format */

import React from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import { getHashParams } from "./utils/index";

const spotifyApi = new Spotify();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      params: "",
      favorite_artists: [],
      user_info: [],
      user_top_artists_all_time: [],
      user_top_artists_6_months: [],
      user_top_artists_four_weeks: [],
      user_top_songs_all_time: [],
      user_top_songs_6_months: [],
      user_top_songs_four_weeks: [],
    };
  }

  componentDidMount() {
    const token = getHashParams();
    spotifyApi.setAccessToken(token.access_token);
    this.getUserTopArtists();
    this.getUserTopTracks();
    this.setState({
      params: token,
    });
  }

  getUserTopArtists = () => {
    spotifyApi
      .getMyTopArtists({ limit: 15, time_range: "long_term" })
      .then((result) => {
        this.setState({
          user_top_artists_all_time: result,
        });
      });
    spotifyApi
      .getMyTopArtists({ limit: 15, time_range: "short_term" })
      .then((result) => {
        this.setState({
          user_top_artists_four_weeks: result,
        });
      });
    spotifyApi
      .getMyTopArtists({ limit: 15, time_range: "medium_term" })
      .then((result) => {
        this.setState({
          user_top_artists_6_months: result,
        });
      });
  };

  getUserTopTracks = () => {
    spotifyApi
      .getMyTopTracks({ limit: 15, time_range: "short_term" })
      .then((result) => {
        this.setState({
          user_top_songs_four_weeks: result,
        });
      });
    spotifyApi
      .getMyTopTracks({ limit: 15, time_range: "medium_term" })
      .then((result) => {
        this.setState({
          user_top_songs_6_months: result,
        });
      });
    spotifyApi
      .getMyTopTracks({ limit: 15, time_range: "long_term" })
      .then((result) => {
        this.setState({
          user_top_songs_all_time: result,
        });
      });
  };

  render() {
    return (
      <div className="App">
        {this.state.params.hasOwnProperty("access_token") ? (
          <Home
            userTopArtistsAllTime={
              this.state.user_top_artists_all_time &&
              this.state.user_top_artists_all_time
            }
            userTopArtists6Months={
              this.state.user_top_artists_6_months &&
              this.state.user_top_artists_6_months
            }
            userTopArtistsFourWeeks={
              this.state.user_top_artists_four_weeks &&
              this.state.user_top_artists_four_weeks
            }
            userTopTracksFourWeeks={
              this.state.user_top_songs_four_weeks &&
              this.state.user_top_songs_four_weeks
            }
            userTopTracks6Months={
              this.state.user_top_songs_6_months &&
              this.state.user_top_songs_6_months
            }
            userTopTracksAllTime={
              this.state.user_top_songs_all_time &&
              this.state.user_top_songs_all_time
            }
          ></Home>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
