import { useState } from "react";

import { useParams } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import "./Product.styles.scss";

const Product = () => {
  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(0);

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      desc: `Long Sleeve Graphic T-shirt Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
      amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
      ut labore etdolore.`,
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
      amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
      ut labore etdolore.`,
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      desc: `Skirt Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
      amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
      ut labore etdolore.`,
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      desc: `Hat Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
      amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
      ut labore etdolore.`,
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={data[id].img}
            alt="Show image 1"
            onClick={(e) => setSelectedImg("img")}
          />
          <img
            src={data[id].img2}
            alt="Show image 2"
            onClick={(e) => setSelectedImg("img2")}
          />
        </div>
        <div className="mainImg">
          <img src={data[id]?.[selectedImg]} alt="Selected Show image" />
        </div>
      </div>
      <div className="right">
        <h1>{data[id].title}</h1>
        <span className="price">${data[id].price}</span>
        <p>{data[id].desc}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
