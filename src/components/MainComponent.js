import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import React, {Component} from 'react';

class Main extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      dishes: DISHES,
      selectedDishId: null
    }
  }

    onDishSelect(dishId) {
        this.setState({selectedDishId: dishId});
    }

  render() {
    return (
    <div>
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href="/">Risorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
        onClick={(dish) => this.onDishSelect(dish)}
      />
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]}/>
    </div>
    );
  }
  
}

export default Main;