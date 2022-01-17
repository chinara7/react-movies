import React, { Component } from 'react'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'

class App extends Component {
    state = {
        movies: [],
        searchQuery: ""
    }


    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (e) => {
        this.setState({ searchQuery: e.target.value })
        console.log(e.target.value)
    }

    async componentDidMount() {
        const baseURL = "http://localhost:3002/movies"
        const response = await fetch(baseURL)
        //console.log(response)
        const data = await response.json()
        console.log(data)
        this.setState({ movies: data })
    }

    render() {
        let filterMovie = this.state.movies.filter(
            (m) => {
                return m.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                </div>
                <MovieList movies={filterMovie} deleteMovieProp={this.deleteMovie} />
            </div>
        )
    }
}
export default App