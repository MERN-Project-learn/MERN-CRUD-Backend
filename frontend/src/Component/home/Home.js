import React ,{Fragment,useEffect} from 'react'
import { getProduct } from '../../action/productAction';
import {useDispatch,useSelector} from "react-redux";
import {Table , Button} from 'react-bootstrap';

const Home = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state=>state.products)
    console.log(products)
    useEffect(()=>{ 
       dispatch(getProduct()) 
    },[dispatch])

    return (
       
          <Fragment>
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>Find the Best Product Below</h1>
          </div>
    
          <h2 className ="homeHeading ">Feature Products</h2>
    
          <div>

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      {products.map((item) => (
      <tbody>
        <tr>
          <td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>
              <Button variant="outline-success" >Edit</Button><br></br>
              </td>
              <td>
              <Button variant="outline-danger" >Remove</Button>
                </td> 
        </tr>
      </tbody>
      ))}
    </Table>
          </div>
        </Fragment>
        )
    }
    export default Home;