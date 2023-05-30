import './App.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './Overview';
import Restaurant from './Restaurant'
import Kodi from './Kodi'
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './Reports';
import Endriti from './Endriti1.png';
import { Foods, Tradicional, ChineseFoods, ItalianFoods,SeaFoods,Salads,Desserts,FastFood,Other,Hof } from './Foods/Foods';
import {Drinks, Alcoholic, NonAlcoholic, Tea, Coffee, Hod, OtherD} from './Drinks/Drinks';
import { Team } from './Team';
import { Msg } from './Msg';
import { Food, Drink } from './Porosia/Porosia';






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
        <Route path='/kodi' exact component={Kodi} />
        <Route path='/team' exact component={Team} />



        <Route path='/foods/tradicional' exact component={Tradicional} />
        <Route path='/foods/chinesefoods' exact component={ChineseFoods} />
        <Route path='/foods/italianfoods' exact component={ItalianFoods} />
        <Route path='/foods/seafoods' exact component={SeaFoods} />
        <Route path='/foods/salads' exact component={Salads} />
        <Route path='/foods/desserts' exact component={Desserts} />
        <Route path='/foods/fastfood' exact component={FastFood} />
        <Route path='/foods/other' exact component={Other} />
        <Route path='/foods/hof' exact component={Hof} />

        <Route path='/drinks/alcoholic' exact component={Alcoholic} />
        <Route path='/drinks/nonalcoholic' exact component={NonAlcoholic} />
        <Route path='/drinks/tea' exact component={Tea} />
        <Route path='/drinks/coffee' exact component={Coffee} />
        <Route path='/drinks/hod' exact component={Hod} />
        <Route path='/drinks/otherd' exact component={OtherD} />
        <Route path='/msg' exact component={Msg} />

        <Route path='/porosia/food' exact component={Food} />
        <Route path='/porosia/drink' exact component={Drink} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
