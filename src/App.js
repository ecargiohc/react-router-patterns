import React, {Component} from 'react';
import './App.css';
import Food from './Food';
import {Route, Switch} from 'react-router-dom';
import Meal from './Meal';
import FoodSearch from './FoodSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        {/* adding multiple route params: */}
        <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
        {/* phase final/best: */}
        <Route exact path="/food/:name" 
        render={(routeProps) => 
          <Food {...routeProps}/>
          //OR: <Food name={routeProps.match.params.name}
          // stuff={routeProps}/> 
          // OR IF you're not passing down props and/or additional data, can just use 'component' instead of render:
          // <Food exact path="/food/:name" component={Food} />
        }/>
        {/* phase 3: */}
          {/* remember to add 'EXACT path' */}
          {/* <Route exact path="/food/:name" render={() => <Food name="chestnuts"/>} /> */}
        {/* phase 2: */}
          {/* <Route path="/food/pineapples" render={() => <Food name="pineapples"/>} />
          <Route path="/food/blueberries" render={() => <Food name="blueberries"/>} /> */}
        {/* phase 1:  */}
          {/* <Food name="pineapples"/>
          <Food name="popcorn"/> */}
          <Route exact path='/' render={(routeProps) => <FoodSearch {...routeProps}/>}/>
            {/* or again: component={FoodSearch} */}
          {/* REMEMBER TO PUT THE ERROR MSG AT THE VERY END, THIS IS SORT OF TREATED LIKE A CONDITIONAL/LAST RESORT; "IF NOT FOUND, DISPLAY THIS" */}
          <Route render={() => <h1>ERROR: Route not found!!!</h1>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
