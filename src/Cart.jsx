import React from "react";
import { AppContext } from "./App";
import { useContext } from "react";
export default function Cart() {
  const { cart } = useContext(AppContext);
  const increment = () => {
    setCart({ ...Cart, qty: cart[qty] + 1});


  };

  const decrement = () => {
   setCart({ ...cart, qty: cart[qty] - 1})

  }
  return (
    <div>
        <h1>My Cart</h1>
    </div>
  )

  
}