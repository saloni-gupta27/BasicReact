import React, { Component } from 'react'

export default class SI extends Component {
    constructor(){
        super();
        this.state={
            si:''
        }
        
        this.amount = React.createRef();
    this.years = React.createRef();
    this.rate = React.createRef();
        
    }
    calculate= (event)=>{
        this.setState({ si:this.amount.current.value *
            this.rate.current.value *
            this.years.current.value *
            0.01});
            event.preventDefault();
        
      };

    



  render() {
    return (
      <div className='container my-3 border'>
        <h3>Calculate your Simple Interest</h3>
        <form onSubmit={this.calculate}>
          <div className="mb-3">
            <label htmlFor="amount" className="control-label fw-bold">
              Amount
            </label>
            <input type="text" className="form-control" ref={this.amount} />
          </div>
          <div className="mb-3">
            <label htmlFor="rate" className="control-label fw-bold">
              Rate
            </label>
            <input type="text" className="form-control" ref={this.rate} />
          </div>
          <div className="mb-3">
            <label htmlFor="years" className="control-label fw-bold">
              Years
            </label>
            <input type="number" className="form-control" ref={this.years} />
            <input
              type="submit"
              className="btn btn-success form-control mt-3"
              value="submit"
            />
            <p className='my-3'> Your simple Interest is {this.state.si? this.state.si : 0.00}</p>
          </div>
        </form>
        
      </div>
    )
  }
}
