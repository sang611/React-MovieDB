import React, {useState, useEffect} from 'react';
import {Link, useParams, withRouter } from 'react-router-dom';
import './SingleMovie.css'

const SingleMovie = (props) => {
    const {imdbID} = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=c24c2c7d&i=${imdbID}`)
            .then(res => res.json())
            .then(movie => {
                setIsLoading(false);
                setMovie(movie);
            })
    }, [])

    const singleMovieComponent = () => {
        return (
            <div className="container">
                <div className="single-movie">
                    <img src={movie.Poster} alt={movie.Title}/>
                    <div className="movie-description">
                        <h1 className="movie-title">{movie.Title}</h1>
                        <p className="movie-plot">{movie.Plot}</p>
                        <h4 className="movie-year">{movie.Year}</h4>
                        <br/>

                        <button type="button" id="btn-back" onClick={() => {
                            props.history.goBack();
                        }}
                        >
                            Back to movies
                        </button>


                    </div>
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            {
                isLoading ? <h1>Loading movie ...</h1> : (
                    movie !== null ? singleMovieComponent() : <h1>Movie is not exist</h1>
                )
            }
        </React.Fragment>
    );
}

export default withRouter(SingleMovie);