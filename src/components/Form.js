import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      country: "",
      errors: {
        firstname: "",
        phone: "",
      },
    };
    this.fname = React.createRef();
    this.lname = React.createRef();
    this.mobile = React.createRef();
  }
  handleFNChange = (event) => {
    this.setState({ firstname: event.target.value });
    let errors = this.state.errors;
    errors.firstname =
      event.target.value.length >= 5
        ? ""
        : "Firstname should be greater than 5 chars";
  };
  handleLNChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleCountryChange = (event) => {
    this.setState({
      country: event.target.value,
    });
  };
  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
    let errors = this.state.errors;

    errors.phone =
      event.target.value.length === 10 ? "" : "It should be valid number";
  };
  handleChangeEvent = (event) => {
    this.setState({
      customername: event.target.value,
    });
  };
  handleSubmit = (e) => {
    if (this.state.errors.firstname === "" && this.state.errors.phone === "")
      console.log(
        this.state.firstname +
          " " +
          this.state.lastname +
          " " +
          this.state.phone +
          " " +
          this.state.country +
          " " +
          this.fname.current.value +
          " " +
          this.lname.current.value +
          " " +
          this.mobile.current.value
      );
    else {
      alert("please enter correct details");
    }
    e.preventDefault();
  };
  handleSubmitForm = (e) => {
    console.log(
      this.fname.current.value +
        " " +
        this.lname.current.value +
        " " +
        this.mobile.current.value
    );
    e.preventDefault()
  };

  render() {
    return (
      <div className="container-md border">
        <h3>Controlled Customer Form</h3>
        <form
          className="container form-group my-3"
          onSubmit={this.handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="Firstname" className="control-label fw-bold">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstname}
              onChange={this.handleFNChange}
            />
            {this.state.errors.firstname && (
              <span className="text-danger">{this.state.errors.firstname}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="Lastname" className="control-label fw-bold">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastname}
              onChange={this.handleLNChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Phone" className="control-label fw-bold">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
            />
            {this.state.errors.phone && (
              <span className="text-danger">{this.state.errors.phone}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="Country" className="control-label fw-bold">
              Country
            </label>

            <select
              name="Country"
              id="Country"
              className="form-select"
              value={this.state.country}
              onChange={this.handleCountryChange}
            >
              <option value="">--Select--</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Brazil">Brazil</option>
              <option value="USA">USA</option>
            </select>
            <span>{this.state.country}</span>
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control mt-3"
            value="Submit"
          />
        </form>
        <hr />
        <h3>Uncontrolled Customer Form</h3>
        <form onSubmit={this.handleSubmitForm}>
          <div className="mb-3">
            <label htmlFor="fname" className="control-label fw-bold">
              Fname
            </label>
            <input type="text" className="form-control" ref={this.fname} />
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="control-label fw-bold">
              Lname
            </label>
            <input type="text" className="form-control" ref={this.lname} />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="control-label fw-bold">
              Mobile
            </label>
            <input type="number" className="form-control" ref={this.mobile} />
            <input
              type="submit"
              className="btn btn-success form-control mt-3"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
