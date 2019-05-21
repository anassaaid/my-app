import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFlux } from "../actions/fluxAction";

import "react-datepicker/dist/react-datepicker.css";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);

class DetailsBPAD extends Component {
  
  componentDidMount() {
    this.props.getFlux();
  }

  getSingleFlux() {
    const flux = this.props.flux.dataBpAd;
    if(flux){
      const param = this.props.match.params.id;
      var res = {};
      flux.forEach(function (item, key) {
        if (item.id == param){
          res = item;
        }
      });
      return (
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">Flux : {res.flux}</div>
            </div>
            <div className="row">
              <div className="col">Date de réception : {res.reception}</div>
            </div>
            <div className="row">
              <div className="col">Date de traitement : {res.traitement}</div>
            </div>  
          </div>
        </div>
        
      );
    }
    return null;
  }

  render() {
    return <div className="row">{this.getSingleFlux()}</div>;
  }
}

DetailsBPAD.propTypes = {
  // flux: PropTypes.array.isRequired,
  getFlux: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  flux: state.flux.flux
});

export default connect(
  mapStateToProps,
  { getFlux }
)(DetailsBPAD);
