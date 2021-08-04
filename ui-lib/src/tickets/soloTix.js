import { Modal, Button } from "react-bootstrap";

export default function soloTicket(dTicket) {
  return (
    <Modal show={dTicket.show} onHide={dTicket.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={dTicket.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={dTicket.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
