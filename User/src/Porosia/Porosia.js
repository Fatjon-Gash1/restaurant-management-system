import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
//import './big-screen.styles.css';
//import './bigbutton.css';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddFoodModal} from './AddFoodModal';
// import {EditFoodModal} from './EditFoodModal';
import {AddDrinkModal} from './AddDrinkModal';
// import {EditDrinkModal} from './EditDrinkModal';

export class Food extends Component{

    constructor(props){
        super(props);
        this.state={foods:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/food')
        .then(response=>response.json())
        .then(data=>{
            this.setState({foods:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteFood(fid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/food/'+fid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {foods,fid,kodi,chinesefoods,italianfoods,desserts,seafoods,fastfood,tradicional,salads,other}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                < br></br>
                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>Tavolina</th>
                        <th>ChineseFoods</th>
                        <th>ItalianFoods</th>
                        <th>Desserts</th>
                        <th>SeaFoods</th>
                        <th>FastFood</th>
                        <th>Tradicional</th>
                        <th>Salads</th>
                        <th>Other</th>
                        <th>Total Price</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map(food=>
                           <tr key={food.FID}>
                           {/* <td>{food.FID}</td> */}
                                <td>{food.Kodi}</td>
                                <td>{food.ChineseFoods}</td>
                                <td>{food.ItalianFoods}</td>
                                <td>{food.Desserts}</td>
                                <td>{food.SeaFoods}</td>
                                <td>{food.FastFood}</td>
                                <td>{food.Tradicional}</td>
                                <td>{food.Salads}</td>
                                <td>{food.Other}</td>
                                <td>{food.TotalP} €</td>
                                <td>
{/* <ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,

        fid:food.FID,kodi:food.Kodi,chinesefoods:food.ChineseFoods,italianfoods:food.ItalianFoods,desserts:food.Desserts,
        seafoods:food.SeaFoods,fastfood:food.FastFood,tradicional:food.Tradicional,salads:food.Salads,other:food.Other})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteFood(food.FID)}>
            Delete
        </Button>
        
        <EditFoodModal show={this.state.editModalShow}
        onHide={editModalClose}
        fid={fid}
        kodi={kodi}
        chinesefoods={chinesefoods}
        italianfoods={italianfoods}
        desserts={desserts}
        seafoods={seafoods}        
        fastfood={fastfood}
        tradicional={tradicional}
        salads={salads}
        other={other}
        />
</ButtonToolbar> */}

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                   Porositni ushqimin</Button>

                    <AddFoodModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}

//Drinks

export class Drinks extends Component{

    constructor(props){
        super(props);
        this.state={drinkss:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/drinks')
        .then(response=>response.json())
        .then(data=>{
            this.setState({drinkss:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteFood(did){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/drinks/'+did,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {drinkss,did,kodi,alcoholic,nonalcoholic,tea,coffee,otherd}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>Tavolina</th>
                        <th>Alcoholic</th>
                        <th>NonAlcoholic</th>
                        <th>Tea</th>
                        <th>Coffee</th>
                        <th>OtherD</th>
                        <th>TotalPrice</th>
                                               
                        </tr>
                    </thead>
                    <tbody>
                        {drinkss.map(drinks=>
                           <tr key={drinks.DID}>
                                <td>{drinks.Kodi}</td>
                                <td>{drinks.Alcoholic}</td>
                                <td>{drinks.NonAlcoholic}</td>
                                <td>{drinks.Tea}</td>
                                <td>{drinks.Coffee}</td>
                                <td>{drinks.OtherD}</td> 
                                <td>{drinks.TotalP} €</td>                                                            
                                                           
                                <td>
{/* <ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,

        did:drinks.DID,kodi:drinks.Kodi,alcoholic:drinks.Alcoholic,nonalcoholic:drinks.NonAlcoholic,
        tea:drinks.Tea,coffee:drinks.Coffee,otherd:drinks.OtherD})}>

            Edit
            </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteFood(drinks.DID)}>
            Delete
        </Button>
        
        <EditDrinkModal show={this.state.editModalShow}
        onHide={editModalClose}
        did={did}
        kodi={kodi}
        alcoholic={alcoholic}
        nonalcoholic={nonalcoholic}
        tea={tea}
        coffee={coffee}        
        otherd={otherd}
        />

</ButtonToolbar> */}

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                   Porositni Pijet</Button>

                    <AddDrinkModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}