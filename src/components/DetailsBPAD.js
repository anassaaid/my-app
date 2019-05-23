import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFlux } from "../actions/fluxAction";
import MyModal from "./MyModal";
import Graph from "./Graph";
import { FaInfoCircle } from "react-icons/fa";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

import "react-datepicker/dist/react-datepicker.css";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

class DetailsBPAD extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      modalShow: false
    };
  }

  componentDidMount() {
    this.props.getFlux();    
  }

  getSingleFlux() {
    const options = {
      sizePerPage: 2,
      hideSizePerPage: true
    };

    const flux = this.props.flux.dataBpAd;
    if (flux) {
      const param = this.props.match.params.id;
      var res = {};
      flux.forEach(function(item, key) {
        if (item.id == param) {
          res = item;
          switch (item.statut) {
            case "OK":
              res.badge = "badge badge-success";
              break;
            case "WARNING":
              res.badge = "badge badge-warning";
              break;
            default:
              res.badge = "badge badge-danger";
              break;
          }
        }
      });

      let iconErrorDetails = "";
      if (res.details_erreurs.length > 0) {
        iconErrorDetails = <FaInfoCircle style={{ marginLeft: "10px" }} />;
      }

      let modalClose = () => this.setState({ modalShow: false });
      
      let series= [
        {
          name: "Ventilation",
          data: [
            {
              name: "Editique",
              y: res.editique_nbr_doc,
              color: "#3498db"
            },
            {
              name: "Digiposte",
              y: res.digipost_nbr_doc,
              color: "#9b59b6"
            }
          ]
        }
      ]

      return (
        <div className="container">
          <MyModal
            show={this.state.modalShow}
            onHide={modalClose}
            titre="Détail des erreurs"
            message={res.details_erreurs}
          />
          <div className="row">
            <div className="col-sm" style={{ paddingTop: "50px" }}>
              <div className="card">
                <div className="card-header">Détails</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <b>Client : </b>
                      {res.client}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <b>Flux :</b> {res.flux}
                    </div>
                    <div className="col">
                      <b>Statut :</b> &nbsp;
                      <span className={res.badge} style={{ cursor: "pointer" }}>
                        {res.statut}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <b>Date de réception :</b> {res.reception}
                    </div>
                    <div className="col">
                      <b>Date de traitement :</b> {res.traitement}
                    </div>
                  </div>
                  <div className="row" style={{ paddingTop: "50px" }}>
                    <div className="col">
                      <div
                        className="card"
                        style={{ width: "18rem", marginTop: "40px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title">Traitement</h5>
                          <div className="row">
                            <div className="col">
                              <b>Nombre de documents :</b>&nbsp;
                              {res.nbr_doc_a_traiter}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Documents en erreur :</b>
                              &nbsp;
                              {res.nbr_doc_ko}
                              <a
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  this.setState({ modalShow: true })
                                }
                              >
                                {iconErrorDetails}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="card"
                        style={{ width: "18rem", marginTop: "40px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title">Ventilation</h5>
                          <div className="row">
                            <div className="col">
                              <Graph series={series} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <BootstrapTable
                        data={res.fichiers}
                        striped
                        hover
                        search
                        pagination
                        options={options}
                      >
                        <TableHeaderColumn
                          isKey
                          dataField="file_name"
                          tdClassName="tr-string-example"
                        >
                          Liste des fichiers
                        </TableHeaderColumn>
                      </BootstrapTable>
                    </div>
                  </div>
                  <div className="row" style={{ paddingTop: "50px" }}>
                    <div className="col">
                      <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                          <h5 className="card-title">Digiposte</h5>
                          <div className="row">
                            <div className="col">
                              <b>Nombre de documents :</b>&nbsp;
                              {res.digipost_nbr_doc}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Nombre d'annexe facile :</b>
                              &nbsp;
                              {res.digipost_nb_af}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Date de dépôt :</b> {res.digipost_date_depot}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                          <h5 className="card-title">Editique</h5>
                          <div className="row">
                            <div className="col">
                              <b>Nombre de documents :</b>&nbsp;
                              {res.editique_nbr_doc}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Nombre d'annexe facile :</b>
                              &nbsp;
                              {res.editique_nb_af}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Date de dépôt :</b>&nbsp;
                              {res.editique_date_depot}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                          <h5 className="card-title">Archivage</h5>
                          <div className="row">
                            <div className="col">
                              <b>Nombre de documents :</b>&nbsp;
                              {res.archivage_nb_doc}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <b>Date de dépôt :</b>&nbsp;
                              {res.archivage_date_depot}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/"
                    className="btn btn-primary"
                    style={{ marginTop: "20px" }}
                  >
                    Retour
                  </a>
                </div>
              </div>
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
