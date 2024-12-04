import React from "react";

export default function Bootstrap() {
  return (
    <>
      <div className="container my-3 bg-dark">
        <div className="row text-warning">
          <div className="h1 col-md-4 border">H1</div>
          <div className="h2 col-md-4 border">H2</div>
          <div className="h3 col-md-4 border">H3</div>
        </div>
      </div>
      <div className="container-fluid my-3 bg-success">
        <div className="row text-light">
          <div className="h1 col-md-4 border">H1</div>
          <div className="h2 col-md-4 border">H2</div>
          <div className="h3 col-md-4 border">H3</div>
        </div>
      </div>
      <div className="container my-3 bg-warning">
        <div className="row text-danger">
          <ul >
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      </div>
      <div className="container my-3 bg-info">
        <div className="row text-dark">
          <ul className="list-unstyled">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      </div>
      <div className="container my-3 bg-warning">
        <div className="row text-danger">
          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ol>
        </div>
      </div>
      <div className="container my-3 bg-info">
        <div className="row text-dark">
          <ol className="list-unstyled">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ol>
        </div>
      </div>
      <table className=" container table table-striped table-bordered table-hover">
        <thead className="fs-4 fw-bold">
        <tr>
        <td>name</td>
        <td>age</td>
        <td>marks</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Ronny</td>
            <td>15</td>
            <td>89</td>
        </tr>  
        <tr>
            <td className="text-capitalize">nia</td>
            <td>12</td>
            <td>89</td>
        </tr>
        <tr>
            <td>Reva</td>
            <td>16</td>
            <td>98</td>
        </tr>
        </tbody>
        
      </table>
      <div className="container my-3">
        <h3>FORM</h3>
            <div className="form-group mb-3">
                <label htmlFor="username" className="fw-bold">Username</label>
                <input type="text" className="form-control" />
                <label htmlFor="Password" className="fw-bold">Password</label>
                <input type="password" className="form-control" />
            </div>
            <h3>FORM Horizontal</h3>
            <form className="container form-horizontal my-3">
                <div className="d-flex flex-row my-3">
            <label htmlFor="username" className="control-label fw-bold col-sm-2">Username</label>
                <input type="text" className="col-sm-10" />
                <div className="col-sm-6"></div>
                </div>
                <div className="d-flex flex-row">
                <label htmlFor="Password" className="control-label fw-bold col-sm-2">Password</label>
                <input type="password" className="col-sm-10" />
                <div className="col-sm-6"></div>
                </div>
            </form>
      </div>
    </>
  );
}
