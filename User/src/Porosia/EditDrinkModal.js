// import React,{Component} from 'react';
// import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

// export class EditDrinkModal extends Component{
//     constructor(props){
//         super(props);
//         this.state={kodi:[],alcoholics:[],nonalcoholics:[],teas:[],coffees:[],otherds:[]};
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }

    
//     componentDidMount(){
//         fetch('https://localhost:44365/api/kodi')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({kodi:data});
//         });
//         fetch('https://localhost:44365/api/alcoholic')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({alcoholics:data});
//         });
//         fetch('https://localhost:44365/api/nonalcoholic')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({nonalcoholics:data});
//         });
//         fetch('https://localhost:44365/api/tea')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({teas:data});
//         });
//         fetch('https://localhost:44365/api/coffee')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({coffees:data});
//         });
//         fetch('https://localhost:44365/api/otherd')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({otherds:data});
//         });
//     }
 
//     handleSubmit(event){
//         event.preventDefault();
//         fetch('https://localhost:44365/api/drinks',{
//             method:'PUT',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 DID:event.target.DID.value,
//                 Kodi:event.target.Kodi.value,
//                 Alcoholic:event.target.Alcoholic.value,
//                 NonAlcoholic:event.target.NonAlcoholic.value,
//                 Tea:event.target.Tea.value,
//                 Coffee:event.target.Coffee.value,
//                 OtherD:event.target.OtherD.value,
//                 })
//         })
//         .then(res=>res.json())
//         .then((result)=>{
//             alert(result);
//         },
//         (error)=>{
//             alert('Failed');
//         })
//     }



//     render(){
//         return (
//             <div className="container">

// <Modal
// {...this.props}
// size="lg"
// aria-labelledby="contained-modal-title-vcenter"
// centered
// >
//     <Modal.Header clooseButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//             Edit Drink
//         </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>

//         <Row>
//             <Col sm={6}>
//                 <Form onSubmit={this.handleSubmit}>

//                 <Form.Group controlId="DID">
//                         <Form.Label>DID</Form.Label>
//                         <Form.Control type="text" name="DID" required 
//                         placeholder="DID"
//                         disabled
//                         defaultValue={this.props.did}/>
//                     </Form.Group>
                    
//                     <Form.Group controlId="Kodi">
//                         <Form.Label>Kodi i Tavolines suaj</Form.Label>
//                         <Form.Control type="text" name="Kodi" required 
//                         placeholder="Kodi"
//                         disabled
//                         defaultValue={this.props.kodi}/>
//                     </Form.Group>              

            
//                     <Form.Group controlId="Alcoholic">
//                         <Form.Label>Alcoholic</Form.Label>
//                         <Form.Control as="select" defaultValue={this.props.alcoholic}>
//                         <option value="">Zgjedh Pijen</option>
//                         {this.state.alcoholics.map(alcoholic=>
//                             <option key={alcoholic.AlcoholicId}>{alcoholic.AlcoholicName}</option>)}
//                         </Form.Control>
//                     </Form.Group>

//                     <Form.Group controlId="NonAlcoholic">
//                         <Form.Label>NonAlcoholic</Form.Label>
//                         <Form.Control as="select" defaultValue={this.props.nonalcoholic}>
//                         <option value="">Zgjedh Pijen</option>
//                         {this.state.nonalcoholics.map(nonalcoholic=>
//                             <option key={nonalcoholic.NonAlcoholicId}>{nonalcoholic.NonAlcoholicName}</option>)}
//                         </Form.Control>
//                     </Form.Group>

//                     <Form.Group controlId="Tea">
//                         <Form.Label>Tea</Form.Label>
//                         <Form.Control as="select" defaultValue={this.props.tea}>
//                         <option value="">Zgjedh Pijen</option>
//                         {this.state.teas.map(tea=>
//                             <option key={tea.TeaId}>{tea.TeaName}</option>)}
//                         </Form.Control>
//                     </Form.Group>

//                     <Form.Group controlId="Coffee">
//                         <Form.Label>Coffee</Form.Label>
//                         <Form.Control as="select" defaultValue={this.props.coffee}>
//                         <option value="">Zgjedh Pijen</option>
//                         {this.state.coffees.map(coffee=>
//                             <option key={coffee.CoffeeId}>{coffee.CoffeeName}</option>)}
//                         </Form.Control>
//                     </Form.Group>

//                     <Form.Group controlId="OtherD">
//                         <Form.Label>OtherD</Form.Label>
//                         <Form.Control as="select" defaultValue={this.props.otherd}>
//                         <option value="">Zgjedh te tjera</option>
//                         {this.state.otherds.map(otherd=>
//                             <option key={otherd.OtherDId}>{otherd.OtherDName}</option>)}
//                         </Form.Control>
//                     </Form.Group>

//                  <Form.Group>

//                         <Button variant="primary" type="submit">
//                             Update Drinks
//                         </Button>
//                     </Form.Group>
//                 </Form>
//             </Col>
//         </Row>
//     </Modal.Body>
    
//     <Modal.Footer>
//         <Button variant="danger" onClick={this.props.onHide}>Close</Button>
//     </Modal.Footer>

// </Modal>

//             </div>
//         )
//     }

// }