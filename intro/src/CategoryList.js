import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "İçecek" },
        { categoryId: 2, categoryName: "Yemek" },
      ],
      currentCategory : ""
    };
  }

  render() {
    return (
      <div>
        <h3> {this.props.info.title} </h3>{" "}
        
        
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem  onClick={()=> this.setState({currentCategory:category.categoryName})}     key={category.categoryId}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
