import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Console de suivi - ERM V2</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
              
          </div>
      </nav>
  );
};

Header.defaultProps = {
  label: "Console de suivi"
};

Header.propTypes = {
  label: PropTypes.string.isRequired
};

export default Header;
