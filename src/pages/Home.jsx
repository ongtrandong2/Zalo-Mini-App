import { Page } from "zmp-ui";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import getAllProducts from "../Apis/getAllProducts";
import UserCard from "../components/user-card";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      console.log("Fetched products:", data); // Debugging line
      if (data) {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <UserCard />
      <h1 className="text-center my-4">Danh mục sản phẩm</h1>
      <Row>
        {products.map(product => (
          <Col xs={6} sm={6} md={4} lg={3} key={product.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Mã SP: {product.code}</Card.Text>  
                <Card.Text>Giá: {product.price} VND</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
