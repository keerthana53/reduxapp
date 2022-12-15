import React from 'react'
import Menu from './Menu'
import Product from './Product'

export default class App extends React.Component
{
  render(){
    return <div>
      <h1>EMarket App</h1>
      <Menu/>
      <hr/>

      <Product/>
    </div>
  }
}
