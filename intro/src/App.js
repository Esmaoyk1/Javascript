import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {currentCategory : ""}
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };


  render() {
    let Categoryinfo = { title: "Başlıkk", Baskabisey: "baska biseyyyy" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList currentCategory = {this.state.currentCategory} changeCategory = {this.changeCategory} info={Categoryinfo} />
            </Col>

            <Col xs="9">
              <ProductList  currentCategory = {this.state.currentCategory} title="Product List" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
