import React from "react";
import "./Download.css";
import Button from "../../components/Button/Button";
import Genres from "../../components/Genres/Genres";
import Available from "../../components/Available/Available";
import Synopsis from "../../components/Synopsis/Synopsis";
import MainLoader from "../../loaders/MainLoader";
import Trailer from "../../components/Trailer/Trailer";
import CommentsUI from "../../components/CommentsUI/CommentsUI";
import Cast from "../../components/Cast/Cast";
import Screenshots from "../../components/Screenshots/Screenshots";
import RelatedMovies from "../../components/RelatedMovies/RelatedMovies";
import relatedMoviesLoader from "../../loaders/relatedMoviesLoader/relatedMoviesLoader";
// import { Modal } from "@material-ui/core";
import Modal from "../../components/Modal/Modal";
export default function DownloadMovieUI(props) {
  console.log("download movie is cliked",props.movie);
  let movieUI = null;
  if (props.movie !== null) {
    let movie = props.movie;
    console.log(movie,"============movie")
    movieUI = (
      <div>
        <div
          className="download"
          style={{ backgroundImage: `url(${movie.background_image})`, backgroundSize:"cover",backgroundPosition:"center center" }}
        >
          <div className="download-poster">
            <div className="image">
              <img alt={movie.title_english} src={movie.large_cover_image} />
              <Button>
                <Modal torrents={movie.torrents} />
              </Button>
            </div>
            <div className="image-datails">
              <h1>{movie.title_english}</h1>
              <p>{movie.year}</p>
              <Genres genres={movie.genres} />
              <div className="available">
                Available In:
                <Available available={movie.torrents} />
              </div>
              <div className="likes">
                <span>
                  Likes: {"  "}
                  {movie.like_count} &hearts;
                </span>
              </div>
              <div className="imdb">
                <span>
                  IMDB: {"  "}
                  {movie.rating}
                </span>
              </div>
            </div>
            <div className="similar-movies">
              {props.relatedMoviesLoader ? (
                <relatedMoviesLoader />
              ) : (
                <RelatedMovies
                  relatedMovies={props.relatedMovies}
                  onSimilarMovieClicked={props.onSimilarMovieClicked}
                />
              )}
            </div>
          </div>
        </div>
        <div className="synopsis">
          <div className="details">
            <Synopsis synopsis={movie.description_full} />
          </div>
          <div className="details">
            <Cast cast={movie.cast} />
          </div>
        </div>
        <Screenshots
          screenShots={{
            screen1: movie.large_screenshot_image1,
            screen2: movie.large_screenshot_image2,
            screen3: movie.large_screenshot_image3
          }}
        />
        <Trailer url={movie.yt_trailer_code} />

        <CommentsUI />
      </div>
    );
  }
  return <div>
    {props.isLoading ? <MainLoader /> : <div>{movieUI}</div>}
    </div>;
}
