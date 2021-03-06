import React, { useEffect, useState } from 'react';
import { useHistory,Link } from 'react-router-dom';

import AdminAllProduct from '../AdminAllProduct/AdminAllProduct';
const AdminShowProduct = () => {
    const [addedProduct, setAddedProduct] = useState([]);
    console.log(addedProduct);
      const history = useHistory();
      useEffect( () => {
         fetch("https://full-stack-server-arifur-rahma.herokuapp.com/getNewProduct")
        .then(res => res.json())
        .then(data => setAddedProduct(data))
    }, [ ])
    return (
        <div className="container admin  text-center">
            
            <div className="sidebar">
                
                <Link to="/" className="btn btn-info">Home</Link>
                <Link to="/AdminShowProduct" className="btn btn-info">Manage Product</Link>
                <button className="btn btn-info" onClick={() => history.replace('/AdminAddProduct')}>Add New Product</button>
                
                <hr/>
           
        </div>
    
            <div className="container admin-content">
                  <h3 className="text-center my-5">Product Listed by Admin</h3>
                  {
                
                    addedProduct.map(product=> <AdminAllProduct product={product} key={product._id}/>) 
                }
            {/* </Table> */}
          </div>
           
            
        </div>
    );
};

export default AdminShowProduct;