import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import "./Modal.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50;
  //   const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: "600px",
    height: "500px",
    overflow: "auto"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  }
}));

export default function PopUpModal(props) {
  let torrents = null;
  if (props.torrents !== undefined) {
    torrents = props.torrents.map(torrent => {
      console.log(torrent);
      const type = torrent.type.charAt(0).toUpperCase() + torrent.type.slice(1);

      return (
        <div className="movie-qualities">
          <div className="type">
            <h3>{type}</h3>
          </div>
          <div className="file-size">
            <p>File Size</p>
            <p>{torrent.size}</p>
          </div>
          <div className="date-uploaded">
            <p>Date Uploaded</p>
            <p>{torrent.date_uploaded} </p>
          </div>
          <div className="seeds">Seeds: {torrent.seeds}</div>
          <div className="quality">Quality: {torrent.quality}</div>
          <div className="url">
            <button>
              <a href={torrent.url}>Download</a>
            </button>
          </div>
        </div>
      );
    });
  }
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      {/* <Button onClick={handleOpen}>Download</Button> */}
      <button
        style={{ background: "transparent", border: "none" }}
        onClick={handleOpen}
      >
        Download
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            <div className="modal-heading">
              <h2>Download Movie</h2>
            </div>
          </Typography>
          {/* <Typography variant="subtitle1" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div className="modal-content">
            <div className="movie-qualities-container">{torrents}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
