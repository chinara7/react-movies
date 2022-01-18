import React, { Component } from 'react'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import axios from 'axios'

class App extends Component {
    state = {
        movies: [],
        searchQuery: ""
    }


    // deleteMovie = (movie) => {
    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     );

    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    // }

    //FETCH API
    deleteMovie = async (movie) => {
        const baseURL = `http://localhost:3002/movies/${movie.id}`
        await fetch(baseURL, { method: "DELETE" })
        
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    //AXIOS API

    // deleteMovie = async (movie) => {
    //    axios.delete(`http://localhost:3002/movies/${movie.id}`)
        
    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     );

    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    // }

    // searchMovie = (e) => {
    //     this.setState({ searchQuery: e.target.value })
    //     console.log(e.target.value)
    // }

    // async componentDidMount() {
    //     const baseURL = "http://localhost:3002/movies"
    //     const response = await fetch(baseURL)
    //     //console.log(response)
    //     const data = await response.json()
    //     console.log(data)
    //     this.setState({ movies: data })
    // }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies")
        console.log(response)
        this.setState({ movies: response.data });
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