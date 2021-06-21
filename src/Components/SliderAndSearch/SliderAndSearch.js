import React from 'react';
import './SliderAndSearch.css';
import { Carousel } from 'react-bootstrap';
const SliderAndSearch = () => {
    return (
        <div className="container text-center">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/Components/SearchBar/sl1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/Components/SearchBar/sl2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/Components/SearchBar/sl3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="search">
               <h3> Search Your Favourite Furniture</h3>
                 <input type="search" name="search" id="search"/>
                 <button className="btn">Search</button>
                
           </div>
        </div>
        
    );
};

export default SliderAndSearch;