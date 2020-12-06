import React, {useState, useEffect} from 'react';
import MovieItem from "./MovieItem/MovieItem";
import './MovieList.css'

const MovieList = (props) => {

    const movies = props.movies;

    return (
        <React.Fragment>
            <div id="movie-list">
                {
                    movies.map((movie) => {
                        return <React.Fragment>
                            <MovieItem key={movie.imdbID} movie={movie}/>
                        </React.Fragment>
                    })
                }

            </div>
        </React.Fragment>
    );
}

export default MovieList;