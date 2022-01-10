import { Modal, Button, Row, Col, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./PackageModal.css";
import { Link } from "react-router-dom";

const PackageModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.modalName)

  const InputPage = () => {
    
  return (
    <div>
      {/* Default checked */}
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultChecked2" />
        <label class="custom-control-label" for="defaultChecked2">{props.modalName}</label>
      </div>
    </div>
  )
}
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        View Package
      </Button> */}

      {/* <Modal show={show} onHide={handleClose} centered size="lg"> */}
      <Modal.Body>
        <Container className="container-fluid">
          <Row>
            <Col md={7}>
              <div className="modal1">
                <Modal.Title className="text1">
                  <p>Step 1: Pick your choice</p>
                </Modal.Title>
                <p className="text2">{props.title}</p>
                <p className="text3">
                  Pick the flowers you would like to plan for your event
                </p>
              </div>
              <div className="container vertical-scrollable">
                  <div className="row text-center">
                    <div className="border">
                      <InputPage />
                    </div>
                    <div className="border">
                      <InputPage />
                    </div>
                  </div>
                </div>
            </Col>
            <Col md={5}>
              <Image src={props.image} fluid />
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Link to="/ganttchart">
        <Button variant="primary">View on Chart</Button></Link>
      </Modal.Footer>
      {/* </Modal> */}
    </div>
  );
};

export default PackageModal;
