import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Table, Icon, Divider } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  image: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/apple-64.png' ,
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  image: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/apple-64.png' ,
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  image: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/apple-64.png' ,
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];



const columns = [{
  title: 'Image',
  dataIndex: 'image',
  key: 'image',
  render: text => <img src={text} />
    ,
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <Divider type="vertical" />
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];


class Table1 extends Component {
  render() {
    return( <Table columns={columns} dataSource={data} />
    )
  }
}

export default Table1
