import React from 'react';
import ReactDOM from 'react-dom';
import ImgsContainer from './ImgsContainer';
//import jQuery from 'jquery';

const url = 'https://jsonplaceholder.typicode.com/photos';
// let data = [];

// //Vanilia JS ajax call to get data from the server
// function fetchData() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.send(null);
//     xhr.onload = function () {
//         if (this.readyState === 4) {
//             if (this.status === 200) {
//                 data = JSON.parse(this.responseText);
//             }else{
//                 console.log("error geting data!");
//             }
//         }
//     }

// };

// //Jquery version of fetchdata
// function jQueryFetchData(data){
//     jQuery.ajax({
//             method: 'GET',
//             url: url,
//             dataType: 'json',
//             success: (d) => {
//                 data = d;
//                 console.log(data);
//             }
//         });
// }


//jQueryFetchData(data);
//console.log(data);
ReactDOM.render(<ImgsContainer url ={url} />, document.getElementById('root'));
