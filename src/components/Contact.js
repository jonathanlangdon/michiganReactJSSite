import React, { useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    question: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      setShowErrorModal(true);
    } else {
      setShowSuccessModal(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        question: ''
      });
    }
  };

  return (
    <Container>
      <h1 className="mt-3">Contact Us</h1>
      <div className="d-flex">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="firstName" className="m-3">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              value={formData.firstName || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="lastName" className="m-3">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              value={formData.lastName || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="m-3">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={formData.email || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="confirmEmail" className="m-3">
            <Form.Label>Confirm Email Address:</Form.Label>
            <Form.Control
              name="confirmEmail"
              type="email"
              value={formData.confirmEmail || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="question" className="m-3">
            <Form.Label>Your Question:</Form.Label>
            <Form.Control
              name="question"
              as="textarea"
              rows={3}
              value={formData.question || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>

        <img
          src="/images/michigan-small.jpg"
          srcSet="
            /images/michigan-small.jpg 1x,
            /images/michigan-medium.jpg 2x,
            /images/michigan-large.jpg 3x
          "
          alt="Michigan Landscape"
          className="img-float d-block mt-3"
        />
      </div>

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your question has been submitted!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Email Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Email Address does not match.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Contact;
