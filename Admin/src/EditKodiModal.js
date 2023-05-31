import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditKodiModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44365/api/kodi',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                KodiId:event.target.KodiId.value,
                KodiName:event.target.KodiName.value
            })
        })
        .then(tav=>tav.json())
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
            Editoni Kodin
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="KodiId">
                        <Form.Label>Numri</Form.Label>
                        <Form.Control type="text" name="KodiId" required
                        disabled
                        defaultValue={this.props.tavid} 
                        placeholder="Numri i tavolinës"/>
                    </Form.Group>

                    <Form.Group controlId="KodiName">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="KodiName" required 
                        defaultValue={this.props.tavname}
                        placeholder="Emri i tavolinës"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Përditësoni Kodin
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