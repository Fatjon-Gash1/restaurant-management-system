import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditDrinkModal extends Component{
    constructor(props){
        super(props);
        this.state={tavolinas:[],alcoholics:[],nonalcoholics:[],teas:[],coffees:[],otherds:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    
    componentDidMount(){
        fetch('https://localhost:44365/api/kodi')
        .then(response=>response.json())
        .then(data=>{
            this.setState({tavolinas:data});
        });
        fetch('https://localhost:44365/api/alcoholic')
        .then(response=>response.json())
        .then(data=>{
            this.setState({alcoholics:data});
        });
        fetch('https://localhost:44365/api/nonalcoholic')
        .then(response=>response.json())
        .then(data=>{
            this.setState({nonalcoholics:data});
        });
        fetch('https://localhost:44365/api/tea')
        .then(response=>response.json())
        .then(data=>{
            this.setState({teas:data});
        });
        fetch('https://localhost:44365/api/coffee')
        .then(response=>response.json())
        .then(data=>{
            this.setState({coffees:data});
        });
        fetch('https://localhost:44365/api/otherd')
        .then(response=>response.json())
        .then(data=>{
            this.setState({otherds:data});
        });
    }
 
    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44365/api/drinks',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DID:event.target.DID.value,
                Tavolina:event.target.Tavolina.value,
                Alcoholic:event.target.Alcoholic.value,
                NonAlcoholic:event.target.NonAlcoholic.value,
                Tea:event.target.Tea.value,
                Coffee:event.target.Coffee.value,
                OtherD:event.target.OtherD.value,
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
aria-labelledby="contained-m    odal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Editoni Porosine e Pijeve
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>

                <Form.Group controlId="DID">
                        <Form.Label>Numri</Form.Label>
                        <Form.Control type="text" name="DID" required 
                        placeholder="Shtypni numrin"
                        disabled
                        defaultValue={this.props.did}/>
                    </Form.Group>
                    
                <Form.Group controlId="Tavolina">
                        <Form.Label>Tavolina</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.tavolina}>
                        <option value="">Zgjedh Tavolinen</option>
                        {this.state.tavolinas.map(tavolina=>
                            <option key={tavolina.TavolinaId}>{tavolina.TavolinaName}</option>)}
                        </Form.Control>
                    </Form.Group>

            
                    <Form.Group controlId="Alcoholic">
                        <Form.Label>Pije Alkoolike</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.alcoholic}>
                        <option value="">Zgjedh Pijen</option>
                        {this.state.alcoholics.map(alcoholic=>
                            <option key={alcoholic.AlcoholicId}>{alcoholic.AlcoholicName}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="NonAlcoholic">
                        <Form.Label>Jo-Alkoolike</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.nonalcoholic}>
                        <option value="">Zgjedh Pijen</option>
                        {this.state.nonalcoholics.map(nonalcoholic=>
                            <option key={nonalcoholic.NonAlcoholicId}>{nonalcoholic.NonAlcoholicName}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Tea">
                        <Form.Label>Çaj</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.tea}>
                        <option value="">Zgjedh Çajin</option>
                        {this.state.teas.map(tea=>
                            <option key={tea.TeaId}>{tea.TeaName}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Coffee">
                        <Form.Label>Kafe</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.coffee}>
                        <option value="">Zgjedh Kafen</option>
                        {this.state.coffees.map(coffee=>
                            <option key={coffee.CoffeeId}>{coffee.CoffeeName}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="OtherD">
                        <Form.Label>Të Tjera</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.otherd}>
                        <option value="">Zgjedh pije të tjera</option>
                        {this.state.otherds.map(otherd=>
                            <option key={otherd.OtherDId}>{otherd.OtherDName}</option>)}
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