import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFlux } from "../actions/fluxAction";

import "react-datepicker/dist/react-datepicker.css";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);

class ConsoleTable extends Component {
  componentDidMount() {
    this.props.getFlux();
  }

  FluxFormatterBP(cell, row) {
    return (
      <div>
        <Link to={`/details/BPAD/${row.id}`}>{cell}</Link>
      </div>
    );
  }

  FluxFormatterImport(cell, row) {
    return (
      <div>
        <Link to={`/details/BPAD/${row.id}`}>{cell}</Link>
      </div>
    );
  }

  FluxFormatterResiliation(cell, row) {
    return (
      <div>
        <Link to={`/details/BPAD/${row.id}`}>{cell}</Link>
      </div>
    );
  }

  NbrDocKoFormatter(cell) {
    if (parseInt(cell) > 0) {
      var icone = (
        <a href="/">
          <FontAwesomeIcon style={{ paddingLeft: "5px" }} icon="stroopwafel" />
        </a>
      );
    }
    return (
      <div>
        {cell}
        {icone}
      </div>
    );
  }

  StatusFormatter(cell, row) {
    let badge = null;
    switch (cell) {
      case "OK":
        badge = "badge badge-success";
        break;
      case "WARNING":
        badge = "badge badge-warning";
        break;
      default:
        badge = "badge badge-danger";
        break;
    }

    return (
      <OverlayTrigger
        trigger="hover"
        key={row.id}
        placement="right"
        overlay={
          <Popover id={`popover-positioned-bottom`} title={`Détails`}>
            Fichier de consigne avec entête manquante!
          </Popover>
        }
      >
        <div>
          <span className={badge} style={{ cursor: "pointer" }}>
            {cell}
          </span>
        </div>
      </OverlayTrigger>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="BP/AD" style={{ marginTop: "30px" }}>
              <BootstrapTable
                data={this.props.flux.dataBpAd}
                striped
                hover
                pagination
              >
                <TableHeaderColumn hidden dataField="id">
                  ID
                </TableHeaderColumn>
                <TableHeaderColumn
                  row="0"
                  rowSpan="2"
                  isKey
                  dataField="flux"
                  dataFormat={this.FluxFormatterBP}
                  tdClassName="tr-string-example"
                >
                  Flux
                </TableHeaderColumn>
                <TableHeaderColumn
                  row="0"
                  rowSpan="2"
                  dataFormat={this.StatusFormatter}
                  dataField="statut"
                >
                  Statut
                </TableHeaderColumn>
                <TableHeaderColumn row="0" rowSpan="2" dataField="reception">
                  Reception
                </TableHeaderColumn>
                <TableHeaderColumn row="0" rowSpan="2" dataField="traitement">
                  Traitement
                </TableHeaderColumn>
                <TableHeaderColumn
                  row="0"
                  rowSpan="2"
                  dataField="nbr_doc_a_traiter"
                >
                  Nbr doc à traiter
                </TableHeaderColumn>
                <TableHeaderColumn
                  row="0"
                  rowSpan="2"
                  dataFormat={this.NbrDocKoFormatter}
                  dataField="nbr_doc_ko"
                >
                  Nbr doc KO
                </TableHeaderColumn>
                <TableHeaderColumn row="0" colSpan="3">
                  Digiposte
                </TableHeaderColumn>
                <TableHeaderColumn row="1" dataField="digipost_nbr_doc">
                  Nb doc
                </TableHeaderColumn>
                <TableHeaderColumn row="1" dataField="digipost_nbr_af">
                  Nb AF
                </TableHeaderColumn>
                <TableHeaderColumn row="1" dataField="digipost_date_depot">
                  Date de dépôt
                </TableHeaderColumn>
                <TableHeaderColumn row="0" colSpan="3">
                  Editique
                </TableHeaderColumn>
                <TableHeaderColumn row="1" dataField="editique_nbr_doc">
                  Nb doc
                </TableHeaderColumn>
                <TableHeaderColumn row="1" dataField="editique_nbr_af">
                  Nb AF
                </TableHeaderColumn>
                <TableHeaderColumn row="1" dataField="editique_date_depot">
                  Date de dépôt
                </TableHeaderColumn>
                <TableHeaderColumn row="0" colSpan="2">
                  Archivage
                </TableHeaderColumn>
                <TableHeaderColumn row="1" dataField="digipost_nbr_doc">
                  Nb doc
                </TableHeaderColumn>
                <TableHeaderColumn row="1" dataField="digipost_date_depot">
                  Date de dépôt
                </TableHeaderColumn>
              </BootstrapTable>
            </Tab>
            <Tab
              eventKey="profile"
              title="Import"
              style={{ marginTop: "30px" }}
            >
              <BootstrapTable
                data={this.props.flux.dataImport}
                striped
                hover
                pagination
              >
                <TableHeaderColumn
                  isKey
                  dataField="flux"
                  dataFormat={this.FluxFormatter}
                  tdClassName="tr-string-example"
                >
                  Flux
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataFormat={this.StatusFormatter}
                  dataField="statut"
                >
                  Statut
                </TableHeaderColumn>
                <TableHeaderColumn dataField="reception">
                  Reception
                </TableHeaderColumn>
                <TableHeaderColumn dataField="traitement">
                  Traitement
                </TableHeaderColumn>
                <TableHeaderColumn dataField="nbrLignes">
                  Nbr doc à traiter
                </TableHeaderColumn>
                <TableHeaderColumn dataField="creation">
                  Création
                </TableHeaderColumn>
                <TableHeaderColumn dataField="maj">MAJ</TableHeaderColumn>
                <TableHeaderColumn dataField="erreur">
                  Erreurs
                </TableHeaderColumn>
                <TableHeaderColumn dataField="typeCompagne">
                  Compagne
                </TableHeaderColumn>
                <TableHeaderColumn dataField="nbrCfnCrees">
                  Nbr CFN créés
                </TableHeaderColumn>
              </BootstrapTable>
            </Tab>
            <Tab
              eventKey="contact"
              title="Resiliations"
              style={{ marginTop: "30px" }}
            >
              <BootstrapTable
                data={this.props.flux.dataResiliation}
                striped
                hover
                pagination
              >
                <TableHeaderColumn
                  isKey
                  dataField="flux"
                  dataFormat={this.FluxFormatter}
                  tdClassName="tr-string-example"
                >
                  Flux
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataFormat={this.StatusFormatter}
                  dataField="statut"
                >
                  Statut
                </TableHeaderColumn>
                <TableHeaderColumn dataField="reception">
                  Reception
                </TableHeaderColumn>
                <TableHeaderColumn dataField="traitement">
                  Traitement
                </TableHeaderColumn>
                <TableHeaderColumn dataField="nbrLignes">
                  Nbr de lignes
                </TableHeaderColumn>
                <TableHeaderColumn dataField="resilies">
                  Résiliés
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="statutIncompatible"
                  dataFormat={this.NbrDocKoFormatter}
                >
                  Staut Incompatible
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="erreur"
                  dataFormat={this.NbrDocKoFormatter}
                >
                  Erreurs
                </TableHeaderColumn>
              </BootstrapTable>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

ConsoleTable.propTypes = {
  // flux: PropTypes.array.isRequired,
  getFlux: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  flux: state.flux.flux
});

export default connect(
  mapStateToProps,
  { getFlux }
)(ConsoleTable);
