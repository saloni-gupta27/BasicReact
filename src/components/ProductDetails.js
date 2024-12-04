import React from "react";
import { useParams } from "react-router-dom";
// import withRouter from './withRouter';

function ProductDetails() {
  const params = useParams();

  console.log("Props:", params);
  return (
    <div className="my-3">
      <h3>Here are the ProductDetails</h3>
      <label>Product Name : </label>
      {params.pname}
      <br />
      <label>Product Number : </label>
      {params.pid}
      <br />
      <label>Product Manuf : </label>
      {params.manf}
      <br />
      <label>Product Price: </label>
      {params.price}
      <br />
    </div>
  );
}
// export default withRouter(ProductDetails)
export default ProductDetails;
