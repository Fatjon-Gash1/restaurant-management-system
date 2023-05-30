import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddFoodItemModal } from './AddFoodItemModal';
import { EditFoodItemModal } from './EditFoodItemModal';
import { AddDrinkModal } from './AddDrinkModal';
import { EditDrinkModal } from './EditDrinkModal';
import { AddOtherModal } from './AddOtherModal';
import { EditOtherModal } from './EditOtherModal';

export class Food extends Component {

    constructor(props) {
        super(props);
        this.state = { fooditems: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('https://localhost:44365/api/fooditem')
            .then(response => response.json())
            .then(data => {
                this.setState({ fooditems: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteFoodItem(fooditemid) {
        if (window.confirm('Are you sure?')) {
            fetch('https://localhost:44365/api/fooditem/' + fooditemid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { fooditems, fooditemid, fooditemname, price } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>FoodItemId</th>
                            <th>FoodItemName</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fooditems.map(fooditem =>
                            <tr key={fooditem.FoodItemId}>
                                <td>{fooditem.FoodItemId}</td>
                                <td>{fooditem.FoodItemName}</td>
                                <td>{fooditem.Price}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                fooditemid: fooditem.FoodItemId, fooditemname: fooditem.FoodItemName, price: fooditem.Price
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteFoodItem(fooditem.FoodItemId)}>
                                            Delete
        </Button>

                                        <EditFoodItemModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            fooditemid={fooditemid}
                                            fooditemname={fooditemname}
                                            price={price}
                                        />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add FoodItem</Button>

                    <AddFoodItemModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}


export class Drinks extends Component {

    constructor(props) {
        super(props);
        this.state = { drinks: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('https://localhost:44365/api/drink')
            .then(response => response.json())
            .then(data => {
                this.setState({ drinks: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteDrink(drinkid) {
        if (window.confirm('Are you sure?')) {
            fetch('https://localhost:44365/api/drink/' + drinkid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { drinks, drinkid, drinkname, price } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>DrinkId</th>
                            <th>DrinkName</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drinks.map(drink =>
                            <tr key={drink.DrinkId}>
                                <td>{drink.DrinkId}</td>
                                <td>{drink.DrinkName}</td>
                                <td>{drink.Price}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                drinkid: drink.DrinkId, drinkname: drink.DrinkName, price: drink.Price
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteDrink(drink.DrinkId)}>
                                            Delete
        </Button>

                                        <EditDrinkModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            drinkid={drinkid}
                                            drinkname={drinkname}
                                            price={price}
                                        />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Drink</Button>

                    <AddDrinkModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}


export const Products = () => {
    return (
        <div className='products'>
            <h1>Reports/reports2</h1>
        </div>
    );
};

export class Other extends Component {

    constructor(props) {
        super(props);
        this.state = { others: [], addModalShow: false, editModalShow: false }
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

    deleteOther(otherid) {
        if (window.confirm('Are you sure?')) {
            fetch('https://localhost:44365/api/other/' + otherid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { others, otherid, othername, price } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>OtherId</th>
                            <th>OtherName</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {others.map(other =>
                            <tr key={other.OtherId}>
                                <td>{other.OtherId}</td>
                                <td>{other.OtherName}</td>
                                <td>{other.Price}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                otherid: other.OtherId, othername: other.OtherName, price: other.Price
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteOther(other.OtherId)}>
                                            Delete
        </Button>

                                        <EditOtherModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            otherid={otherid}
                                            othername={othername}
                                            price={price}
                                        />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Other Products</Button>

                    <AddOtherModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}




//   export const Other = () => {
//     return (
//       <div className='products'>
//         <h1>Reports/reports3</h1>
//       </div>
//     );
//   };

export default Food;