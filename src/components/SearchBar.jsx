import React from 'react'

class SearchBar extends React.Component {
    

    handleFormSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group form-row mb-5">
                    <label htmlFor="exampleFormControlInput1"><h1>Search</h1></label>
                    <input onChange={this.props.searchMovieProp}
                        type="text"
                        className="form-control"
                        placeholder="Search movie"/>
                </div>
            </form>
        )
    }
}

export default SearchBar