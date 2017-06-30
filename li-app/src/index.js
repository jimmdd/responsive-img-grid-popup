import React from 'react';
import ReactDOM from 'react-dom';
import ImgsContainer from './ImgsContainer';

const url = 'https://jsonplaceholder.typicode.com/photos';
let data = [];

//Vanilia JS ajax call to get data from the server
function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send(null);
    xhr.onload = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                data = JSON.parse(this.responseText);
            }else{
                console.log("error geting data!");
            }
        }
    }

};


fetchData();
console.log(data);
ReactDOM.render(<ImgsContainer data={data} />, document.getElementById('root'));
