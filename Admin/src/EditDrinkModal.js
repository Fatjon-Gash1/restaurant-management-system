import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditDrinkModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
 
    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44365/api/drink',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DrinkId:event.target.DrinkId.value,
                DrinkName:event.target.DrinkName.value,
                Price:event.target.Price.value,
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
            Edit Drink
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="DrinkId">
                        <Form.Label>DrinkId</Form.Label>
                        <Form.Control type="text" name="DrinkId" required 
                        placeholder="DrinkId"
                        disabled
                        defaultValue={this.props.drinkid}/>
                    </Form.Group>

                    <Form.Group controlId="DrinkName">
                        <Form.Label>DrinkName</Form.Label>
                        <Form.Control type="text" name="DrinkName" required 
                        defaultValue={this.props.drinkname}
                        placeholder="DrinkName"/>
                    </Form.Group>

                    <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="Price" required 
                        defaultValue={this.props.price}
                        placeholder="Price"/>
                    </Form.Group>
                    
                

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Drink
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}