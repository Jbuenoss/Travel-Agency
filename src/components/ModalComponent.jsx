import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormComponent from './FormComponent';
import './style.css';


function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow} id="white-button">
        Book a tour
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book a tour</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormComponent />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" id="white-button">checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent