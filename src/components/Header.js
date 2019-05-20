import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { label } = props;

  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Console de suivi - ERM V2</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
              
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
