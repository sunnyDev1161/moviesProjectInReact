import React from "react";
import "./Cast.css";

export default function Cast(props) {
  let cast = null;
  if (props.cast !== undefined) {
    cast = props.cast.map(cast => {
      var name = cast.name.split("");
      var firstLetter = name[0];
      return (
        <table> 
          <tbody>
            <tr>
              {cast.url_small_image ? (
                <td>
                  <div className="cast-image">
                    <img alt={cast.name} src={cast.url_small_image} />
                  </div>
                </td>
              ) : (
                <td>
                  <div className="cast-image">
                    <h1>{firstLetter}</h1>
                  </div>
                </td>
              )}
              <td>
                <h5>
                  {cast.name} as {cast.character_name}
                </h5>
              </td>
            </tr>
          </tbody>
        </table>
      );
    });
  }
  return (
    <div className="cast-container">
      <h1>Cast</h1>
      {cast}
    </div>
  );
}
