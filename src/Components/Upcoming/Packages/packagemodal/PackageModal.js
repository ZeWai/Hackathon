import { Modal, Button, Row, Col, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./PackageModal.css";

const PackageModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        View Package
      </Button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <Container class="container-fluid">
            <Row>
              <Col md={7}>
                
                  <div class="modal1">
                    <Modal.Title class="text1">
                      <p>Step 1: Pick your choice</p>
                    </Modal.Title>
                    <p class ="text2">{props.title}</p>
                    <p class="text3">
                      Pick the flowers you would like to plan for your event
                    </p>
                  </div>
                  <div class="container vertical-scrollable">
                    <div class="row text-center">
                      
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
          <Button variant="primary" onClick={handleClose}>
            View on Chart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PackageModal;
