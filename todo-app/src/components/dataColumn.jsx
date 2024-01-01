import { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import TaskCard from './taskCard';

const headstyle = {
  color: "#232323",
  fontFamily: "Nunito Sans",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "20px"
};

const MyComponent = ({ fieldName, fieldColor, textColor , tasks , setTasks ,curr }) => {
  
  const [taskData, setTaskData] = useState({});
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleAddTask = () => {
    const newTask = { ...taskData };
    setTaskData({})
    setTasks([...tasks, newTask]);
    handleClose();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTaskData({ ...taskData, [id]: value });
  };

const newtask =   tasks.filter((task) => task.status === fieldName)
  return (
    <div className="class1">
      <p id="label" style={{ background: fieldColor }}>
        <div style={{ height: '8px', width: '8px', borderRadius: 100, background: textColor }}></div>
        <span id="label-text" style={{ color: textColor }}>
          {fieldName}
        </span>
      </p>
      {tasks &&
        newtask.map((task, index) => (
          <TaskCard
            taskname={task.name}
            startdate={task.startdate}
            enddate={task.enddate}
            theme = {fieldColor}
            textcolor = {textColor}
            key={index}
          />
        ))}
        
      <button
        id="add-item"
        onClick={handleShow}
        style={{
          display: 'flex',
          width: '270px',
          height: '32px',
          padding: '10px 8px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          borderRadius: '8px',
          border: 'none',
          background: fieldColor,
        }}
      >

        <span style={{ width: '12px', height: '12px', flexShrink: '0', color: textColor }}>+</span>
        <span id="text" style={{ color: textColor, fontFamily: 'Nunito Sans', fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '20px' }}>Add new</span>
      </button>
      <Modal size="md" show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label style={headstyle}>Name of the task</Form.Label>
              <Form.Control type="text" placeholder="Enter task name" onChange={handleChange} />
            </Form.Group>
            <Row className="justify-content-center">
              <Col>
                <Form.Group controlId="startdate">
                  <Form.Label style={headstyle}>Start date</Form.Label>
                  <Form.Control type="date" placeholder="DD/MM/YYYY" onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="enddate">
                  <Form.Label style={headstyle}>Deadline</Form.Label>
                  <Form.Control type="date" placeholder="DD/MM/YYYY" onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="status">
              <Form.Label style={headstyle}>Status</Form.Label>
              <Form.Control as="select" onChange={handleChange}>
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
          <Button variant="primary" onClick={handleAddTask}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyComponent;
