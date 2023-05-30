import './App.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './Overview';
import Restaurant from './Restaurant'
import Team from './Team'
import Msg from './Msg'
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './Reports';
import Endriti from './Endriti1.png';
import { Foods, Tradicional, ChineseFoods, ItalianFoods,SeaFoods,Salads,Desserts,FastFood,Other} from './Foods/Foods';
import {Drink, Alcoholic, NonAlcoholic, Tea, Coffee,OtherD} from './Drink/Drink';
import { Food, Drinks } from './Porosia/Porosia';
import Info from './Info';



// import { Feedback } from './Feedback';




function App() {
  return (
    <Router>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center"style={{color: '#2567C3'} }>
      <img src={Endriti}height={150} width={350}/>
      
       </h3>
       <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/restaurant' exact component={Restaurant} />
        <Route path='/team' exact component={Team} />
        {/* <Route path='/message/feedback' exact component={Feedback} /> */}



        <Route path='/foods/tradicional' exact component={Tradicional} />
        <Route path='/foods/chinesefoods' exact component={ChineseFoods} />
        <Route path='/foods/italianfoods' exact component={ItalianFoods} />
        <Route path='/foods/seafoods' exact component={SeaFoods} />
        <Route path='/foods/salads' exact component={Salads} />
        <Route path='/foods/desserts' exact component={Desserts} />
        <Route path='/foods/fastfood' exact component={FastFood} />
        <Route path='/foods/other' exact component={Other} />

        <Route path='/drinks/alcoholic' exact component={Alcoholic} />
        <Route path='/drinks/nonalcoholic' exact component={NonAlcoholic} />
        <Route path='/drinks/tea' exact component={Tea} />
        <Route path='/drinks/coffee' exact component={Coffee} />
        <Route path='/drinks/otherd' exact component={OtherD} />

        <Route path='/porosia/food' exact component={Food} />
        <Route path='/porosia/drinks' exact component={Drinks} />
        <Route path='/msg' exact component={Msg} />
        <Route path='/info' exact component={Info} />


   



      </Switch>
    </div>
    </Router>
  );
}

export default App;
