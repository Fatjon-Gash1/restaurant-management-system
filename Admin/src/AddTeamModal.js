import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import './big-screen.styles.css'


export class AddTeamModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44365/api/team',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //TeamId:null,
                TeamName:event.target.TeamName.value,TeamSurname:event.target.TeamSurname.value,Position:event.target.Position.value

            })
        })
        .then(teams=>teams.json())
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
            Shtoni Anëtar në Staff
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="TeamName">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="TeamName" required 
                        placeholder="Shtypni emrin"/>
                    </Form.Group>

                    <Form.Group controlId="TeamSurname">
                        <Form.Label>Mbiemri</Form.Label>
                        <Form.Control type="text" name="TeamSurname" required 
                        placeholder="Shtypni mbiemrin"/>
                    </Form.Group>
                    
                    <Form.Group controlId="Position">
                        <Form.Label>Pozita</Form.Label>
                        <Form.Control type="text" name="Position" required 
                        placeholder="Caktoni pozitën"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shtoni Anëtarin
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