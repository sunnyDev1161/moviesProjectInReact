import React, { Component } from "react";
import { connect } from "react-redux";
import { indexMovies } from "../../actions/indexMovies";
import IndexPageMovieList from "./IndexPageMovieList";
import MainLoader from "../../loaders/MainLoader";
import ScrollingLoader from "../../loaders/scrollingLoader/ScrollingLoader";

class IndexPage extends Component {
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
    this.props.history.push(`/download/${id}`);
  };
  render() {
    return (
      <div>
        {!this.state.networkError ? (
          <div>
            {this.state.isLoading ? (
              <MainLoader />
            ) : (
              <div>
                <IndexPageMovieList
                  moviesList={this.state.moviesList}
                  isLoading={this.state.isLoading}
                  onIndexMovieClicked={this.onIndexMovieClicked}
                />
                {/* {this.state.scrolling ? (
                  <ScrollingLoader />
                ) : (
                  <IndexPageMovieList
                    moviesList={this.state.moviesList}
                    isLoading={this.state.isLoading}
                  />
                )} */}
              </div>
            )}
          </div>
        ) : (
          <h1>Oops! Something Went Wrong</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moviesList: state.index.indexMovies
});

const mapDispatchToProps = dispatch => ({
  indexMovies: (page, limit) => dispatch(indexMovies(page, limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
