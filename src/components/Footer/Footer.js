import React from "react";
import "./Footer.css";

const Foorter = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-text">
          <p>&copy; Copy Right reserved {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Foorter;
