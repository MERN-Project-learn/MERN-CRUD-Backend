import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productActions";
import { useParams } from "react-router-dom";


const Products = () => {
  const dispatch = useDispatch();
 
  const {id} = useParams();

  const {products} = useSelector((state) => state.products);
  

  useEffect(() => {
    dispatch(console.log(getProduct())); 
   
  }, [dispatch]);

  return (
    
        <Fragment>
          
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            
           </div>
        </Fragment>
      )}
 

export default Products;
