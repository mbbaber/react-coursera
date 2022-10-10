import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Routes, Route, Navigate} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      dishes: DISHES,
      selectedDishId: null
    }
  }

    // onDishSelect(dishId) {
    //     this.setState({selectedDishId: dishId});
    // }

  render() {
    const HomePage = () => {
        return(
            <Home />
        )
    }
    return (
    <div>
        <Header/>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route exact path="/menu" element={<Menu dishes={this.state.dishes}/>}/>
                <Route path="/" element={<Navigate to="/home"/>}/>
            </Routes>
        {/* <Menu dishes={this.state.dishes}
            onClick={(dish) => this.onDishSelect(dish)}
        /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]}/> */}
        <Footer/>
    </div>
    );
  }
  
}

export default Main;