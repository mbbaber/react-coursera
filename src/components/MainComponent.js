import Contact from './ContactComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Routes, Route, Navigate} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedDishId: null
    }
  }

    // onDishSelect(dishId) {
    //     this.setState({selectedDishId: dishId});
    // }

  render() {
    const HomePage = () => {
        return(
            <Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        )
    }
    return (
    <div>
        <Header/>
            <Routes>
                <Route path="/home" element={<HomePage/>} />
                <Route exact path="/menu" element={<Menu dishes={this.state.dishes}/>}/>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route exact path='/contactus' element={<Contact />} />
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