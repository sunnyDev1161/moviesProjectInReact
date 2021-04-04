import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieById } from "../../actions/getmovieById";
import { getComments } from "../../actions/comments";
import { getRelatedMovies } from "../../actions/relatedMovies";
import DownloadMovieUI from "./DownloadMovieUI";
import CommentsUI from "../../components/CommentsUI/CommentsUI";
import axios from "axios";

class Download extends Component {
  state = {
    movie: null,
    isLoading: true,
    relatedMovies: null,
    relatedMoviesLoader: true
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props
      .getMovieById(id)
      .then(res => {
        if (res.data.status === "ok") {
          console.log(res,"=============res")
          this.setState({
            movie: res.data.data.movie,
            isLoading: false
          });
        } else {
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false
        });
      });

      console.log(this.props.getComments(id),"============this.props.getComments(id)")
    // getting comments
    this.props.getComments(id).then(res => {
      console.log("=============comment", res).catch(err => console.log(err,"============err"));
    });

    this.props
      .getRelatedMovies(id)
      .then(res => {
        // console.log(res.data);
        if (res.data.status === "ok") {
          this.setState({
            relatedMovies: res.data.data.movies,
            relatedMoviesLoader: false
          });
        } else {
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          relatedMovies: null,
          relatedMoviesLoader: false
        });
      });
  }
  onSimilarMovieClicked = id => {
    this.props.history.push(`/download/${id}`);
    window.location.reload();
  };
  render() {
    return (
      <div>
        <DownloadMovieUI
          movie={this.state.movie}
          isLoading={this.state.isLoading}
          relatedMovies={this.state.relatedMovies}
          onSimilarMovieClicked={this.onSimilarMovieClicked}
          relatedMoviesLoader={this.state.relatedMoviesLoader}
        />
        <CommentsUI />
      </div>
    );
  }
}

export default connect(
  null,
  { getMovieById, getComments, getRelatedMovies }
)(Download);
