import React, { Component } from 'react';
import './App.css';
import { Card } from 'antd';


class Cards extends Component {
  render() {
    return( <Card 
    	hoverable 
    	style={{ width: 200 }} 
    	//cover={}
    	>
   	<p><img src={this.props.image} /></p>
    <p><a href='#'>{this.props.name}</a></p>
    <p>{this.props.price}</p>
    <p>Category</p>
  </Card>)
  }
} 

export default Cards