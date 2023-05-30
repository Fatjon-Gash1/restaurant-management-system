import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
// import './big-screen.styles.css';
// import './bigbutton.css';


export class Other extends Component {

    constructor(props) {
        super(props);
        this.state = { others: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/other')
            .then(response => response.json())
            .then(data => {
                this.setState({ others: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { others } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>OtherName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {others.map(other =>
                            <tr>
                                <td>{other.OtherName}</td>
                                <td>{other.Price} €</td>

                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export class ChineseFoods extends Component {

    constructor(props) {
        super(props);
        this.state = { chinesefoodss: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/chinesefoods')
            .then(response => response.json())
            .then(data => {
                this.setState({ chinesefoodss: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { chinesefoodss } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>ChineseFoodsName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chinesefoodss.map(chinesefoods =>
                            <tr>
                                <td>{chinesefoods.ChineseFoodsName}</td>
                                <td>{chinesefoods.Price} €</td>


                            </tr>)}
                    </tbody>

                </Table>


            </div>
        )
    }
}

export class Tradicional extends Component {

    constructor(props) {
        super(props);
        this.state = { tradicionals: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/tradicional')
            .then(response => response.json())
            .then(data => {
                this.setState({ tradicionals: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { tradicionals } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>TradicionalName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tradicionals.map(tradicional =>
                            <tr>
                                <td>{tradicional.TradicionalName}</td>
                                <td>{tradicional.Price} €</td>
                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}



export class ItalianFoods extends Component {

    constructor(props) {
        super(props);
        this.state = { italianfoodss: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/italianfoods')
            .then(response => response.json())
            .then(data => {
                this.setState({ italianfoodss: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { italianfoodss } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>ItalianFoodsName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {italianfoodss.map(italianfoods =>
                            <tr>
                                <td>{italianfoods.ItalianFoodsName}</td>
                                <td>{italianfoods.Price} €</td>

                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}


export class SeaFoods extends Component {

    constructor(props) {
        super(props);
        this.state = { seafoodss: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/seafoods')
            .then(response => response.json())
            .then(data => {
                this.setState({ seafoodss: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }


    render() {
        const { seafoodss } = this.state;

        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>SeaFoodsName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seafoodss.map(seafoods =>
                            <tr>
                                <td>{seafoods.SeaFoodsName}</td>
                                <td>{seafoods.Price} €</td>


                            </tr>)}
                    </tbody>

                </Table>


            </div>
        )
    }
}

export class Salads extends Component {

    constructor(props) {
        super(props);
        this.state = { saladss: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/salads')
            .then(response => response.json())
            .then(data => {
                this.setState({ saladss: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { saladss } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>SaladsName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {saladss.map(salads =>
                            <tr>
                                <td>{salads.SaladsName}</td>
                                <td>{salads.Price} €</td>

                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}

export class Desserts extends Component {

    constructor(props) {
        super(props);
        this.state = { dessertss: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/desserts')
            .then(response => response.json())
            .then(data => {
                this.setState({ dessertss: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { dessertss } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>DessertsName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dessertss.map(desserts =>
                            <tr>
                                <td>{desserts.DessertsName}</td>
                                <td>{desserts.Price} €</td>

                            </tr>)}
                    </tbody>

                </Table>
            </div>
        )
    }
}

export class FastFood extends Component {

    constructor(props) {
        super(props);
        this.state = { fastfoods: [] }
    }

    refreshList() {
        fetch('https://localhost:44365/api/fastfood')
            .then(response => response.json())
            .then(data => {
                this.setState({ fastfoods: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { fastfoods } = this.state;
        return (
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                            <th>FastFoodName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fastfoods.map(fastfood =>
                            <tr>
                                <td>{fastfood.FastFoodName}</td>
                                <td>{fastfood.Price} €</td>

                            </tr>)}
                    </tbody>

                </Table>

            </div>
        )
    }
}
