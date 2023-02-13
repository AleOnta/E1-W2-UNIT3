import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <ListGroup variant="flush">
        {this.props.data.map((comment, index) => {
          return (
            <ListGroupItem className="commentElement d-flex justify-content-between" key={index}>
              <span>{comment.comment}</span>
              <span>{comment.rate}</span>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentList;
