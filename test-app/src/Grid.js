import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import Card from './Card.js';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
        width: window.innerWidth,
        products: null
      };
  }

  handleResize = () => this.setState({
    width: window.innerWidth
  });

  componentDidMount() {
    fetch('https://app.teapplix.com/h/sophietest1/te/pd.php?Action=get&entities[]=products')
      .then(response => response.json())
      .then((data) => {
        this.setState({ products: data.data.products});
        })
      .catch(error => console.log(error));
    this.handleResize();
    window.addEventListener('resize', this.handleResize) 
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }


  render() {
    const {width, products} = this.state

    var isTablet = width < 840
    var isMobile = width < 540
    var rows = [];
    var element;

    if (isMobile) {
      for (var key in products) {
        if (products.hasOwnProperty(key)) {
          element = (
            <div>
            <br />
            <Row type="flex" justify="space-around" align="middle">  
            <Col span={12}><Card image={products[key].image_url_s} name={products[key].item_title} price={products[key].default_price} /></Col>  
            </Row>. 
            </div>);
          rows.push(element);
        }
      }
      return (rows)
        
    } else if (isTablet) {
        
        if (products != null) {
          var first;
        var second;
          var keys = Object.keys(products)
          var index = 0;
          var length = Object.keys(products).length;

           while (index < (length - 1)) {
          first = products[keys[index]]
          second = products[keys[index+1]]
          element = (
        <div>
        <br />
        <Row type="flex" justify="space-around" align="middle">  
        <Col span={8}><Card image={first.image_url_s} name={first.item_title} price={first.default_price} /></Col>  
        <Col span={8}><Card image={second.image_url_s} name={second.item_title} price={second.default_price} /></Col>   
        </Row>
        </div>);
          rows.push(element);
          index = index + 2
        }

        if (index < length) {
          first = products[keys[index]]
          element = (
            <div>
            <br />
            <Row type="flex" justify="space-around" align="middle">  
            <Col span={8}><Card image={first.image_url_s} name={first.item_title} price={first.default_price} /></Col>  
            <Col span={8}></Col> 
            </Row>. 
            </div>);
          rows.push(element);
        }
        }
  
      return (rows)
  } else {
    if (products != null) {
      var first;
        var second;
        var third;
        var fourth;
        var keys = Object.keys(products)
        var index = 0;
        var length = Object.keys(products).length;

        while (index < (length-3)) {
          first = products[keys[index]]
          second = products[keys[index+1]]
          third = products[keys[index+2]]
          fourth = products[keys[index+3]]

          element = (
        <div>
      <br />
      <Row type="flex" justify="space-around" align="middle">  
      <Col span={4}><Card image={first.image_url_s} name={first.item_title} price={first.default_price} /></Col>  
      <Col span={4}><Card image={second.image_url_s} name={second.item_title} price={second.default_price} /></Col>  
      <Col span={4}><Card image={third.image_url_s} name={third.item_title} price={third.default_price} /></Col>  
      <Col span={4}><Card image={fourth.image_url_s} name={fourth.item_title} price={fourth.default_price} /></Col>  
      </Row>
      </div>);

          rows.push(element);
          index = index + 4
        }

        if (index == length-1) {
          first = products[keys[index]]

          element = (
        <div>
      <br />
      <Row type="flex" justify="space-around" align="middle">  
      <Col span={4}><Card image={first.image_url_s} name={first.item_title} price={first.default_price} /></Col>  
      <Col span={4}></Col>  
      <Col span={4}></Col>  
      <Col span={4}></Col>  
      </Row>
      </div>);

          rows.push(element);

        } else if (index == length-2) {
            first = products[keys[index]]
          second = products[keys[index+1]]

          element = (
        <div>
      <br />
      <Row type="flex" justify="space-around" align="middle">  
      <Col span={4}><Card image={first.image_url_s} name={first.item_title} price={first.default_price} /></Col>  
      <Col span={4}><Card image={second.image_url_s} name={second.item_title} price={second.default_price} /></Col>  
      <Col span={4}></Col>  
      <Col span={4}></Col>  
      </Row>
      </div>);

          rows.push(element);
        } else if (index == length-3) {
            first = products[keys[index]]
          second = products[keys[index+1]]
          third = products[keys[index+2]]

          element = (
        <div>
      <br />
      <Row type="flex" justify="space-around" align="middle">  
      <Col span={4}><Card image={first.image_url_s} name={first.item_title} price={first.default_price} /></Col>  
      <Col span={4}><Card image={second.image_url_s} name={second.item_title} price={second.default_price} /></Col>  
      <Col span={4}><Card image={third.image_url_s} name={third.item_title} price={third.default_price} /></Col>  
      <Col span={4}></Col>  
      </Row>
      </div>);

          rows.push(element);
        }
    }
      
   
      return (rows)
  }
  }
}

export default Grid