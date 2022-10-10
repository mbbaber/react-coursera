import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({commentsArr}) {
        if (commentsArr != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {commentsArr.map(comment => {
                            return(
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            );
        }
    }
  

    const DishDetail = (props) => {
        if (props.dish != null) {
            return( 
                <div className='container'>
                    <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/menu'>Menu</Link>
                                <Link active>{props.dish.name}</Link>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
            </div>
            
        )  
        } else {
            return (
                <div></div>
            )
        }
    }

    export default DishDetail;