import React, { useState } from "react";
// import ImageContainer from "./ImageContainer";

const SingleProduct = ({ prod, cart, setCart }) => {
    //please note that i have tried implementing carousel using imagecontainer component, unfortunately i couldnt.. you can check the logic
    const [quantity, setQuantity] = useState(0);
    const AddQuantity =() => {
        setQuantity(quantity+1);
    }
    const decreaseQuantity = () =>{
        if (quantity>=1) {
            setQuantity(quantity-1);
        }
        else
        {
            alert('Your Quantity is zero');
        }
    }
  return (
    <div className="products">
      {prod.images.map((image) => {
        return <h1>Hi</h1>
      })}
      
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.title}</span>
        <span>₹{prod.price}</span>
        <span>disc:{prod.discountPercentage}%</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
            setQuantity(0);
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod, quantity]);
          }}
        >
          Add to Cart
        </button>
      )}
    {  <button className="Quantity">
          <span>
            <button onClick={AddQuantity}>+</button>
            <span>{quantity}</span>
            <button onClick={decreaseQuantity}>-</button>
          </span>
      </button>}
    </div>
  );
};

export default SingleProduct;
