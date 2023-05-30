import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditOtherModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
 
    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44365/api/other',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                OtherId:event.target.OtherId.value,
                OtherName:event.target.OtherName.value,
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
            Editoni të Tjerat
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="OtherId">
                        <Form.Label>Numri</Form.Label>
                        <Form.Control type="text" name="OtherId" required 
                        placeholder="Shtypni numrin"
                        disabled
                        defaultValue={this.props.otherid}/>
                    </Form.Group>

                    <Form.Group controlId="OtherName">
                        <Form.Label>Emri i të Tjerave</Form.Label>
                        <Form.Control type="text" name="OtherName" required 
                        defaultValue={this.props.otherName}
                        placeholder="Shtypni emrin"/>
                    </Form.Group>

                    <Form.Group controlId="Price">
                        <Form.Label>Çmimi</Form.Label>
                        <Form.Control type="text" name="Price" required 
                        defaultValue={this.props.price}
                        placeholder="Shtypni çmimin"/>
                    </Form.Group>
                    
                

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Perditësoni
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