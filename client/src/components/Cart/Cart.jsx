import { useState } from "react";

import "./Cart.styles.scss";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const products = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt",
      desc: `Graphic T-shirt Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
      amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
      ut labore etdolore.`,
      isNew: true,
      oldPrice: 19,
      price: 12,
      quantity: 1,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Cap",
      desc: `Cap Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
      amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
      ut labore etdolore.`,
      isNew: true,
      oldPrice: 19,
      price: 12,
      quantity: 3,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: `Coat Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
      amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
      ut labore etdolore.`,
      isNew: false,
      oldPrice: 19,
      price: 12,
      quantity: 7,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve T-shirt",
      desc: `Long Sleeve T-shirt Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
      amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
      ut labore etdolore.`,
      isNew: false,
      oldPrice: 19,
      price: 12,
      quantity: 2,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}...</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
