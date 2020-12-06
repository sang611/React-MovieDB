import './App.css';
import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import SingleMovie from "./components/SingleMovie/SingleMovie";

function App() {
    const [searchText, setSearchText] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const onEnterSearch = ($event) => {

        if($event.key === "Enter") {
            $event.preventDefault();
            setIsLoading(true);
            fetch(`https://www.omdbapi.com/?apikey=c24c2c7d&s=${searchText}`)
                .then(res => res.json())
                .then((movies) => setMovieList(movies.Search))
                .then(() => setIsLoading(false))
        }
    }

  return (
    <React.Fragment >

        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="container">
                        <h1>Search movies</h1>
                        <br/>
                        <form action="#">
                            <input
                                type="text"
                                id="movie-input"
                                placeholder="Search movies"
                                value={searchText}
                                onChange={(event) => setSearchText(event.target.value)}
                                onKeyPress={onEnterSearch}
                            />
                        </form>
                        {
                            isLoading ? <h2>Loading ...</h2> : (
                                movieList == null ? <h2>No movie found</h2> : (
                                    movieList.length == 0 ? <h2>Type some word</h2> : <MovieList movies={movieList}/>
                                )

                            )
                        }

                    </div>
                </Route>
                <Route exact path="/:imdbID">
                    <SingleMovie />
                </Route>
            </Switch>

        </Router>

    </React.Fragment>
  );
}

export default App;
