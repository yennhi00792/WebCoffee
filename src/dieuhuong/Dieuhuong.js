import React, { Component } from 'react';
import { Routes, Route,} from "react-router-dom";
import Home from '../component/Home'
import About from '../component/About'
import Products from '../component/Products'
import Store from '../component/Store'

export default class Dieuhuong extends Component {
  render() {
    return (
      <Routes >
        <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<Products />}/>
        <Route path="/Store" element={<Store />}/>
      </Routes>
    )
  }
}
