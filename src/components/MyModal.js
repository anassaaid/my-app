import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { FaAngleRight } from "react-icons/fa";

class MyModal extends Component {

  showMessage(){
    let result = [], key=0;
    (this.props.message).forEach(function(element){
      result.push(
        <div className="row" key={key++}>
          <div className="col">
            <FaAngleRight /> {element}
          </div>
        </div>);
    });
    return result;
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.titre ? this.props.titre:''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.showMessage()}
        </Modal.Body>
      </Modal>
    );
  }
}

export default MyModal;
