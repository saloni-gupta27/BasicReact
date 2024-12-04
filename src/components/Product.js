import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
  products = [
    {
      productno: 111,
      name: "IPhone",
      manufacturer: "Apple",
      price: "Rs. 45000",
    },
    {
      productno: 121,
      name: "IPad",
      manufacturer: "Apple",
      price: "Rs. 34500",
    },
    {
      productno: 131,
      name: "IPod",
      manufacturer: "Apple",
      price: "Rs. 32222",
    },
    {
      productno: 141,
      name: "Moto G",
      manufacturer: "Motorola",
      price: "Rs. 35678",
    },
    {
      productno: 151,
      name: "Moto X",
      manufacturer: "Motorola",
      price: "Rs. 43434",
    },
  ];

  render() {
    return (
      <div className="my-3">
        Product Component
        {this.products.map((a) => (
          <li key={a.productno}>
            <Link
              to={`/product/productdetail/${a.name}/${a.productno}/${a.manufacturer}/${a.price}`}
            >
              {a.productno}
            </Link>
          </li>
        ))}
      </div>
    );
  }
}
