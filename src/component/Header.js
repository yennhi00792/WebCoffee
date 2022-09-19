import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header>
        <h1 className="site-heading text-center text-faded d-none d-lg-block">
          <span className="site-heading-upper text-primary mb-3">Business theme and introduction to coffee</span>
          <span className="site-heading-lower">Business Casual</span>
        </h1>
      </header>
    )
  }
}
