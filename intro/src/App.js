import React from "react"
import Navi from "./Navi";
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row ,Col } from "reactstrap";
function App() {
  let Categoryinfo = {title:"Başlıkk", Baskabisey:"baska biseyyyy" };

  return (
    <div>
      <Container>
        <Row>
          <Navi/>
        </Row>

        <Row>
          <Col xs = "3">
            <CategoryList info = {Categoryinfo}/>
          </Col>
         
          <Col xs = "9">
            <ProductList title = "Product List"/>
          </Col>
          
        </Row>

      </Container>

      
    </div>



  );
}

export default App;
