import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddMsgModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44365/api/msg',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Emri:event.target.Emri.value,
                MsgName:event.target.MsgName.value
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
            Shkruani Mesazh
        </Modal.Title>
    </Modal.Header>

<table>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <th>
                        
                    <Form.Group controlId="Emri" >
                        <Form.Label>Emri Juaj</Form.Label>
                        <Form.Control type="text" name="Emri"  style={{width: "200px"}}
                        placeholder="Shkruani emrin këtu" />
                    </Form.Group>

                    <Form.Group controlId="MsgName" >
                        <Form.Label>Mesazhi</Form.Label>
                        <Form.Control type="text" name="MsgName" required rows='3'   style={{width: "500px" , height: "150px" }}
                        placeholder="Shkruani mesazhin këtu..." />
                    </Form.Group>
</th>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Dergoni Mesazhin
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    </table>
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Mbyll</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}