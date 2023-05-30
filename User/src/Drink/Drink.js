import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
// import './big-screen.styles.css';
// import './bigbutton.css';



export class Alcoholic extends Component {


    constructor(props) {
        super(props);
        this.state = { alcoholics: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/alcoholic')
            .then(response => response.json())
            .then(data => {
                this.setState({ alcoholics: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { alcoholics } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>AlcoholicName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alcoholics.map(alcoholic =>
                            <tr>
                                <td>{alcoholic.AlcoholicName}</td>
                                <td>{alcoholic.Price} €</td>

                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}

export class NonAlcoholic extends Component {

    constructor(props) {
        super(props);
        this.state = { nonalcoholics: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/nonalcoholic')
            .then(response => response.json())
            .then(data => {
                this.setState({ nonalcoholics: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }


    render() {
        const { nonalcoholics } = this.state;        
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>NonAlcoholicName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nonalcoholics.map(nonalcoholic =>
                            <tr>
                                <td>{nonalcoholic.NonAlcoholicName}</td>
                                <td>{nonalcoholic.Price} €</td>

                            </tr>)}
                    </tbody>

                </Table>
            </div>
        )
    }
}



export class Tea extends Component {

    constructor(props) {
        super(props);
        this.state = { teas: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/tea')
            .then(response => response.json())
            .then(data => {
                this.setState({ teas: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { teas } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>TeaName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teas.map(tea =>
                            <tr>
                                <td>{tea.TeaName}</td>
                                <td>{tea.Price} €</td>

                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}


export class Coffee extends Component {

    constructor(props) {
        super(props);
        this.state = { coffees: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/coffee')
            .then(response => response.json())
            .then(data => {
                this.setState({ coffees: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { coffees } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>CoffeeName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coffees.map(coffee =>
                            <tr key={coffee.CoffeeId}>
                                <td>{coffee.CoffeeName}</td>
                                <td>{coffee.Price} €</td>

                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}



export class OtherD extends Component {

    constructor(props) {
        super(props);
        this.state = { otherds: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/otherd')
            .then(response => response.json())
            .then(data => {
                this.setState({ otherds: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { otherds } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>OtherDName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {otherds.map(otherd =>
                            <tr>
                                <td>{otherd.OtherDName}</td>
                                <td>{otherd.Price} €</td>
                               
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}


