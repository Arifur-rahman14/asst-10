import React from 'react';
import { Card, Button, Pagination } from 'react-bootstrap';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            <Card className="text-center footer-body">
                <Card.Header>Online Furniture Shop</Card.Header>
                <Card.Body>
                    <Card.Title>Trusted Online Furniture Shop in Bangladesh</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis excepturi error laborum ullam fuga explicabo consequuntur voluptate nam incidunt vitae.

                    </Card.Text>
                    <Button variant="primary">Contact US</Button>
                    <Card.Footer className="text-muted">Made By Arifur Rahman</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Footer;