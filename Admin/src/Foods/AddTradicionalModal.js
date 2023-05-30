import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

export class AddTradicionalModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('https://localhost:44365/api/tradicional', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                TradicionalName: event.target.TradicionalName.value,
                Price: event.target.Price.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }


    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Shtoni Ushqimin Tradicional
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="TradicionalName">
                                        <Form.Label>Emri i Ushqimit</Form.Label>
                                        <Form.Control type="text" name="TradicionalName" required
                                            placeholder="Shtypni emrin" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Çmimi</Form.Label>
                                        <Form.Control type="Price" name="Price" required
                                            placeholder="Shtypni Çmimin" />
                                    </Form.Group>



                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Shtoni
                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>

                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Mbyll</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}