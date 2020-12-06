import React from 'react'
import './MovieItem.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const MovieItem = (props) => {
    const movie = props.movie
    return <React.Fragment>
        <Link to={`/${movie.imdbID}`} className="movie-item">
            <img src={movie.Poster} alt=""/>
            <div className="movie-info">
                <h4 className="movie-name">{movie.Title}</h4>
                <h4 className="movie-year">{movie.Year}</h4>
            </div>
        </Link>
    </React.Fragment>
}
export default MovieItem;