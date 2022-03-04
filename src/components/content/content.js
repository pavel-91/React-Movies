import React, { Component } from "react";
import Movies from "../movies/movies";
import Search from "../search/search";
import Preloader from "../preloader/preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Content extends Component {

    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    updateSearch = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const {movies, loading} = this.state;
        return (
            <>
                <div className="content container">
                    <Search updateSearch={this.updateSearch}/>
                    {loading ? <Preloader/> : (<Movies movies={movies} />)}
                </div>
            </>
        )
    }

}