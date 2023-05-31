import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditTeamModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44365/api/team',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TeamId:event.target.TeamId.value,
                TeamName:event.target.TeamName.value,
                TeamSurname:event.target.TeamSurname.value,
                Position:event.target.Position.value

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
            Editoni Anëtarin
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="TeamId">
                        <Form.Label>Numri</Form.Label>
                        <Form.Control type="text" name="TeamId" required
                        disabled
                        defaultValue={this.props.teamsid} 
                        placeholder="Shtypni numrin"/>
                    </Form.Group>

                    <Form.Group controlId="TeamName">
                        <Form.Label>Emri i Anëtarit</Form.Label>
                        <Form.Control type="text" name="TeamName" required 
                        defaultValue={this.props.teamsname}
                        placeholder="Shtypni emrin"/>
                    </Form.Group>

                    <Form.Group controlId="TeamSurname">
                        <Form.Label>Mbiemri i Anëtarit</Form.Label>
                        <Form.Control type="text" name="TeamSurname" required 
                        defaultValue={this.props.teamsurname}
                        placeholder="Shtypni mbiemrin"/>
                    </Form.Group>

                    
                    <Form.Group controlId="Position">
                        <Form.Label>Pozita</Form.Label>            
                        <Form.Control as="select" name="Position" required 
                        defaultValue={this.props.position}>
                        <option value="Pacaktuar">Pacaktuar</option>
                        <option value="IT">IT</option>
                        <option value="Menagjer">Menagjer</option>
                        <option value="Kuzhinier">Kuzhinier</option>
                        <option value="Kamarier">Kamarier</option>
                        </Form.Control>
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