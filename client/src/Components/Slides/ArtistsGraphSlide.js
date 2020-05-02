/** @format */

import React from "react";
import styled from "styled-components";
import Chart from "../UI Components/Chart";
export default function SecondSlide({
  userTopArtistsAllTime,
  userTopArtists6Months,
  userTopArtistsFourWeeks,
}) {
  const { items } = userTopArtistsAllTime;
  const { items2 } = userTopArtists6Months;
  const { items3 } = userTopArtistsFourWeeks;

  let data1 = [];
  let data2 = [];
  let data3 = [];

  items &&
    items.map((item) =>
      data1.push({
        name: item.name,
        number: item.popularity,
        icon: item.images[2].url,
      })
    );

  items2 &&
    items2.map((item) =>
      data2.push({
        name: item.name,
        number: item.popularity,
        icon: item.images[2].url,
      })
    );

  items3 &&
    items3.map((item) =>
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
