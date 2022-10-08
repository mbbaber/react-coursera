import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDish: props.selectedDish
        }
    };

 render() {
    return (
        <Card>
            <CardImg width="100%" object src={this.state.selectedDish.image} alt={this.state.selectedDish.name}></CardImg>
                <CardBody>
                    <CardTitle>{this.state.selectedDish.name}</CardTitle>
                    <CardText>{this.state.selectedDish.description}</CardText>
                </CardBody>
        </Card>
    )
 }
}

export default DishDetail;