import { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';


const headstyle = {
    color: "#232323",
      fontFamily: "Nunito Sans",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px"
  };
  
function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div className="App">
      

      <Modal size="md" show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="taskName">
              <Form.Label style = {headstyle}>Name of the task</Form.Label>
              <Form.Control type="text" placeholder="Enter task name" />
            </Form.Group>
            <Row className="justify-content-center">
              <Col >
                <Form.Group controlId="startDate">
                  <Form.Label style = {headstyle}>Start date</Form.Label>
                  <Form.Control type="date" placeholder="DD/MM/YYYY" />
                </Form.Group>
              </Col>
              <Col  >
                <Form.Group controlId="deadline">
                  <Form.Label style = {headstyle}>Deadline</Form.Label>
                  <Form.Control type="date" placeholder="DD/MM/YYYY" />
                </Form.Group>
              </Col>
            </Row>
           
            <Form.Group controlId="status">
              <Form.Label style = {headstyle}>Status</Form.Label>
              <Form.Control as="select">
                <option>To Do</option>
                <option>In Progress</option>
                <option>In Review</option>
                <option>Completed</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Popup;
