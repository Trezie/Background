import ReactDOM from 'react-dom';
import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import App from "./App.js";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(requests);
            return requests;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);
      

    return (
        <div>
            <h2>{title}</h2>

            <div className="row_posters">
                {/* several row_posters */}

                {movies.map(movie => (
                    <img 
                      key={movie.id}
                      className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                      src={`${base_url}${
                          isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                      alt={movie.name} 
                    />
                ))}
            </div>
        </div>
    
    )

}

export default Row;