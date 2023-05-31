import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './big-screen.styles.css';
import './bigbutton.css';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddResModal } from './AddResModal';
import { EditResModal } from './EditResModal';

export class Restaurant extends Component {

    constructor(props) {
        super(props);
        this.state = { ress: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('https://localhost:44365/api/restaurant')
            .then(response => response.json())
            .then(data => {
                this.setState({ ress: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteRes(resid) {
        if (window.confirm('A jeni i Sigurt?')) {
            fetch('https://localhost:44365/api/restaurant/' + resid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { ress, resid, resname,lokacioni } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div>               
                <br />
                <b />
                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>Numri</th>
                            <th>Emri i Restaurantit</th>
                            <th>Lokacioni</th>
                            <th>Opsionet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ress.map(res =>
                            <tr key={res.RestaurantId}>
                                <td>{res.RestaurantId}</td>
                                <td>{res.RestaurantName}</td>
                                <td>{res.Lokacioni}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                resid: res.RestaurantId, resname: res.RestaurantName, resname: res.Lokacioni
                                            })}>
                                            Editoni
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteRes(res.RestaurantId)}>
                                            Fshij
        </Button>

                                        <EditResModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            resid={resid}
                                            resname={resname} 
                                            lokacioni={lokacioni}/>
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary' className="bigbutton"
                        onClick={() => {
                            this.setState({
                                addModalShow: true
                            });
                        }}>
                        Shtoni Restaurant</Button>

                    <AddResModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default Restaurant;