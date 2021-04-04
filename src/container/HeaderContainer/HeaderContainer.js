import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { searchMovie } from "../../actions/searchMovie";
import "./HeaderContainer.css";
import SearchMovie from "../../components/SearchMovie/SearchMovie";

class HeaderContainer extends Component {
  state = {
    searchedMovies: null,
    searchValue: ""
  };

  componentDidMount() {}

  onSearchMovie = e => {
    this.setState({
      searchValue: e.target.value
    });
    if (e.target.value === "") {
      this.setState({
        searchedMovies: null
      });
    } else if (e.target.value.length >= 4) {
      this.props
        .searchMovie(e.target.value)
        .then(res => {
          if (res.data.status === "ok") {
            this.setState({
              searchedMovies: res.data.data.movies
            });
          } else {
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            searchedMovies: null
          });
        });
    }
  };

  onSearchMovieClicked = id => {
    window.location = `/download/${id}`;
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <Header>
          <input
            type="text"
            className="header-input"
            placeholder="Search...."
            value={this.state.searchValue}
            onChange={this.onSearchMovie}
          />

          <SearchMovie
            movies={this.state.searchedMovies}
            onSearchMovieClicked={this.onSearchMovieClicked}
          />
        </Header>
      </div>
    );
  }
}

export default connect(
  null,
  { searchMovie }
)(HeaderContainer);
