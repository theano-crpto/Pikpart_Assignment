import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SingleProduct from './SingleProduct';
import "./styles.css";

const Home = () => {
    
    const [products, setProducts]  = useState([])
    const [error, setError] = useState(false)
    const [cart, setCart] = useState([])
   
    useEffect(() => {
        //i am using here iifi(immediately invoked function)
        (async() => {
           try {
             setError(false)
             let response = await axios.get('https://dummyjson.com/products')
             setProducts(response.data.products);
             
           } catch (error) {
            setError(true)
           }
        })()
    },[])
    if (error) {
        return <h1>Something went wrong</h1>
    }
    
  return (
    <div className='productContainer'>
        {products.map((prod) => (
            <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
        ))}
    </div>
  )
}

export default Home
