import React, { useEffect, useState } from 'react';
// import fakeData from '../../fakeData';
import Products from '../ProductListCard/ProductListCard';
import loading from '../../images/loading.gif';
import './Home.css';
import SliderAndSearch from '../SliderAndSearch/SliderAndSearch';
const Home = () => {

     const [products, setProducts] = useState([]);

    
    useEffect(() => {
        fetch("https://full-stack-server-arifur-rahma.herokuapp.com/getProduct")
            .then(res => res.json())
            .then(data => {
                setProducts(data)       
        })
    },[])
   

    return (
        <>
            <SliderAndSearch></SliderAndSearch>
       {products.length>0? <div className="products">
            {
                products.map(product => (<Products product={product} key={product.key}/>))
            }
                </div> :
          
                  <div className="text-center m-5 loading">
              <img src= {loading} alt="loading-gif"/>      
                </div>
            }
          
            </>
    );
};

export default Home;