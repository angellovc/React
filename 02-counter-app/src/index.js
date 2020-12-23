import React from 'react';
import ReactDom from 'react-dom';
// import FirstApp from './FirstApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

// ReactDom.render(<FirstApp saludo="Hi, Im Angello" />, divRoot);
ReactDom.render(<CounterApp value={1} />, divRoot);
