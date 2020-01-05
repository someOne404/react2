import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if(comments !== null){
            const commentView = comments.map((c) => 
            <li key={c.id}>
                {c.comment}<br/>
                {'--' + c.author}
                {', ' + new Intl.DateTimeFormat('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: '2-digit' 
                    }).format(new Date(c.date))}
            </li>);
    
            return(
                <div>
                    <h4>Comments</h4>  
                    <ul className = "list-unstyled">
                        {commentView}
                    </ul>        
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish? this.props.selectedDish.comments : null)}
                </div>
            </div>
        );
    }
}

export default DishDetail;