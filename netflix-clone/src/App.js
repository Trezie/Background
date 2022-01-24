import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from "./requests";




function App() {
  return (
    <div className="App">
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchTopRated}
        isLargeRow 
      />
        
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />
      <Row title="SciFi" fetchUrl={requests.fetchSciFi} />
      <Row title="Western" fetchUrl={requests.fetchWestern} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="TV" fetchUrl={requests.fetchTV} />
    </div>
  );
}

export default App;
