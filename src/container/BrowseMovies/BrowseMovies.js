import React, { Component } from "react";
import BrowseMoviesForm from "../../components/BrowseMoviesForm/BrowseMoviesForm";
import IndexPageMovieList from "../../components/IndexPage/IndexPageMovieList";
import { connect } from "react-redux";
import { indexMovies } from "../../actions/indexMovies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class BrowseMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      moviesList: [],
      page: 1,
      limit: 20,
      networkError: false,
      scrolling: false
    };

    window.onscroll = e => {
      if (
        window.innerHeight + document.documentElement.scrollTop ==
        document.documentElement.offsetHeight
      ) {
        console.log("now its scrolling in a right way");
        // loading more movies on scrolling down
        this.setState({
          // scrolling: true
        });
        this.loadMoreMovies();
      }
    };
  }

  componentWillMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    var { page, limit, moviesList } = this.state;
    this.props
      .indexMovies(page, limit)
      .then(res => {
        console.log(res);
        if (res.data.status === "ok") {
          this.setState({
            moviesList: [...moviesList, ...res.data.data.movies],
            isLoading: false,
            scrolling: false
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          moviesList: [],
          isLoading: false,
          networkError: true,
          scrolling: false
        });
      });
  };

  loadMoreMovies = () => {
    console.log("more movies");
    // this.setState(
    //   prevState => (
    //     {
    //       page: prevState.page + 1,
    //       limit: prevState.limit + 20
    //     },
    //     () => this.loadMovies()
    //   )
    // );
    this.setState(
      {
        page: this.state.page + 1
      },
      () => this.loadMovies()
    );
  };

  // when movie poster is clicked
  onIndexMovieClicked = id => {
    console.log("movie is clicked");
    this.props.history.push(`/download/${id}`);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <Router>
          <BrowseMoviesForm />
          <IndexPageMovieList
            moviesList={this.state.moviesList}
            onIndexMovieClicked={this.onIndexMovieClicked}
          />
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  indexMovies: () => dispatch(indexMovies())
});
const mapStateToProps = state => ({
  moviesList: state.index.indexMovies
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseMovies);
