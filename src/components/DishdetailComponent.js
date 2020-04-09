import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderComments(comments) {
    let comment = null;

    if (comments) {
      comment = comments.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.comment}
            <br></br>
            <br></br>
            --{comment.author} ,
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
            <br></br>
            <br></br>
          </li>
        );
      });

      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">{comment}</ul>
        </div>
      );
    } else return <div></div>;
  }

  //method for rendering a dish which is clicked
  renderDish(dish) {
    if (dish != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div></div>;
  }

  render() {
    const dish = this.props.selectedDish;
    const comments = dish && dish.comments ? dish.comments : null;

    return (
      <div className="row">
        {this.renderDish(dish)}
        {this.renderComments(comments)}
      </div>
    );
  }
}

export default DishDetail;
