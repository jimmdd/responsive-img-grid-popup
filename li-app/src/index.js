import React from 'react';
import ReactDOM from 'react-dom';
import ImgsContainer from './ImgsContainer';

const URL = 'https://jsonplaceholder.typicode.com/photos';
const PicNum  = 25;

ReactDOM.render(<ImgsContainer url ={URL} picNum={PicNum} />, document.getElementById('root'));
