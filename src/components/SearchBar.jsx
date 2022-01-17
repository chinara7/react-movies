import React from 'react'

class SearchBar extends React.Component {
    state = {
        searchQuery: ""
    }
    
    handleFormSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group form-row mb-5">
                    <label htmlFor="exampleFormControlInput1"><h1>Search</h1></label>
                    <input onChange={(e) => this.setState({ searchQuery: e.target.value })}
                        type="text"
                        className="form-control"
                        placeholder="Search movie"
                        value={this.state.searchQuery} />
                </div>
            </form>
        )
    }
}

export default SearchBar