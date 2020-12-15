import React from 'react';
import ReactDom from 'react-dom';
import CounterApp from './counterApp';
import './index.css';

const divRoot = document.querySelector('#root');
ReactDom.render(<CounterApp value={1} />, divRoot);