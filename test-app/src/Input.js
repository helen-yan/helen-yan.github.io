import React, { Component } from 'react';
import './App.css';
import { Input, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const Search = Input.Search;


const InputGroup = Input.Group;
const Option = Select.Option;

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);


class searchBar extends Component {
	render() {
		return(<div>
	<br /> <br />
    <InputGroup compact>
          <Select defaultValue="All">
            <Option value="All">All  	</Option>
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
            <Option value="Option3">Option3</Option>
          </Select>
          
          <Search

      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: '40%' }} />
        </InputGroup>
        <br /> <br />
  </div>)
	}
}



export default searchBar
