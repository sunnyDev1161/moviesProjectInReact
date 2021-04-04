import React from "react";
import "./BrowseMoviesForm.css";

export default function BrowseMoviesForm() {
  return (
    <div className="form-container">
      <div className="movies-form">
        <form>
          <div>
            <div>
              <label label="movieName" className="searchMmovieLabel">
                Search Movie
              </label>
            </div>
            <div>
              <input name="movieName" type="text" />
              <button name="submit"> Submit </button>
            </div>
            <div className="select-containe">
              <div className="select-container">
                <label>Quality</label>
                <select>
                  <option value={"all"}>All</option>
                  <option value={"720p"}>720p</option>
                  <option value={"1080p"}>1080p</option>
                  <option value={"3D"}>3D</option>
                </select>
              </div>

              <div className="select-container">
                <label>Quality</label>
                <select>
                  <option value={"all"}>All</option>
                  <option value={"720p"}>720p</option>
                  <option value={"1080p"}>1080p</option>
                  <option value={"3D"}>3D</option>
                </select>
              </div>
              <div className="select-container">
                <label>Quality</label>
                <select>
                  <option value={"all"}>All</option>
                  <option value={"720p"}>720p</option>
                  <option value={"1080p"}>1080p</option>
                  <option value={"3D"}>3D</option>
                </select>
              </div>
              <div className="select-container">
                <label>Quality</label>
                <select>
                  <option value={"all"}>All</option>
                  <option value={"720p"}>720p</option>
                  <option value={"1080p"}>1080p</option>
                  <option value={"3D"}>3D</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
