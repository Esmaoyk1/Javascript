import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "İçecek" },
        { categoryId: 2, categoryName: "Yemek" }
      ],
    };
  }

  render() {
    return (
      <div>
        <h3> {this.props.info.title} </h3>{" "}
        <h4> {this.props.info.Baskabisey} </h4> <h4>{this.state.counter}</h4>
        <ListGroup>
          <ListGroupItem tag="a" href="#">
            Cras justo odio{" "}
          </ListGroupItem>{" "}
          <ListGroupItem tag="a" href="#">
            Dapibus ac facilisis in
          </ListGroupItem>{" "}
          <ListGroupItem tag="a" href="#">
            Morbi leo risus{" "}
          </ListGroupItem>{" "}
          <ListGroupItem tag="a" href="#">
            Porta ac consectetur ac{" "}
          </ListGroupItem>{" "}
          <ListGroupItem tag="a" href="#">
            Vestibulum at eros{" "}
          </ListGroupItem>{" "}
        </ListGroup>{" "}
      </div>
    );
  }
}
