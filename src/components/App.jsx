import React, { Component } from 'react'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'

class App extends Component {
    state = {
        movies: [
            {
                "id": 1,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            },

            {
                "id": 2,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },

            {
                "id": 3,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
            },

            {
                "id": 4,
                "name": "Rogue",
                "rating": 7.4,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
            },

            {
                "id": 5,
                "name": "Project Power",
                "rating": 6.7,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg"
            },

            {
                "id": 6,
                "name": "Superman",
                "rating": 7.6,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
            }
        ],
        searchQuery: ""
    }


    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        //eger evvelden bir siyahi olmazsa bunu yazmaq olar ancaq movies siyahisi evvelden oldugu ucun asagidakini yazmaq lazimdi
        // this.setState({
        //     movies: newMovieList
        // });

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (e) => {
        this.setState({ searchQuery: e.target.value })
        console.log(e.target.value)
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