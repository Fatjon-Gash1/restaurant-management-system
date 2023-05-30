import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './big-screen.styles.css';
import './bigbutton.css';


export class Restaurant extends Component {

    constructor(props) {
        super(props);
        this.state = { ress: [] }
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



    render() {
        const { ress } = this.state;

        return (
            <div>

                <br />
                <b />
                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>RestaurantName</th>
                            <th>Lokacioni</th>

                        </tr>
                    </thead>
                    <tbody>
                        {ress.map(res =>
                            <tr>
                                <td>{res.RestaurantName}</td>
                                <td>{res.Lokacioni}</td>

                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Restaurant;