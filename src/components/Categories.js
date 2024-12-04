import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Categories extends Component {
  render() {
    return (
      <div>
        <h3>This is Category wise distribution</h3>
        <ul className='list-unstyled'>
        <li>
            <Link
              to="/categories/forms"
            >
            Forms
            </Link>
          </li>
          <li>
            <Link
              to="/categories/bootstrap"
            >
            Bootstrap
            </Link>
          </li>
          <li>
            <Link
              to="/categories/calculator"
            >
            Calculator
            </Link>
          </li>
          </ul>
      </div>
    )
  }
}
