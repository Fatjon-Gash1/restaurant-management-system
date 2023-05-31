import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditResModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44365/api/restaurant',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                RestaurantId:event.target.RestaurantId.value,
                RestaurantName:event.target.RestaurantName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
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
            Editoni Restaurantin
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="RestaurantId">
                        <Form.Label>Numri</Form.Label>
                        <Form.Control type="text" name="RestaurantId" required
                        disabled
                        defaultValue={this.props.resid} 
                        placeholder="Shkruaj numrin"/>
                    </Form.Group>

                    <Form.Group controlId="RestaurantName">
                        <Form.Label>Emri i Restaurantit</Form.Label>
                        <Form.Control type="text" name="RestaurantName" required 
                        defaultValue={this.props.resname}
                        placeholder="Shkruaj emrin"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Përditësoni
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