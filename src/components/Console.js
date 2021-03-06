import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import ConsoleTable from "./ConsoleTable";

class Console extends Component {
  state = {
    startDate: "",
    endDate: ""
  };

  handleChange(date) {}

  render() {
    return (
      <div className="row" style={{ width: "100%" }}>
        <div className="col-*-12">
          <div className="row">
            <div className="col">
              <h3
                style={{
                  textAlign: "center",
                  margin: "50px"
                }}
              >
                Console de suivi - Niveau 1
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg">
              <button
                type="button"
                className="btn btn-danger"
                style={{
                  float: "right",
                  marginBottom: "20px"
                }}
              >
                <span className="badge badge-light">4</span> Traitements en
                erreur
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg">
              <div className="card mb-3">
                <div className="card-header">Recherche</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="client">Client :</label>
                        <select className="form-control">
                          <option value="">Select client (admin)</option>
                          <option value="">Client 1</option>
                          <option value="">Client 2</option>
                          <option value="">Client 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="client">Statut :</label>
                        <select className="form-control">
                          <option value="">Select statut</option>
                          <option value="">Statut 1</option>
                          <option value="">Statut 2</option>
                          <option value="">Statut 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="client">Date debut :</label>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="client">Date fin :</label>
                        <DatePicker
                          selected={this.state.endDate}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <a
                        href="/"
                        className="btn btn-primary"
                        style={{ float: "right" }}
                      >
                        Valider
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ConsoleTable />
        </div>
      </div>
    );
  }
}

export default Console;
