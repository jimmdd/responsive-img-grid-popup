import React, { Component } from 'react';
import ImgBox from './ImgBox';
import jQuery from 'jquery';

class ImgsContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            pictureNum: 1,
            value: '',
        }
    }

    //wait for fetchdata finish
    componentWillMount() {
        this._fetchData();
    }

    //Jquery version of fetchdata
    _fetchData() {
        jQuery.ajax({
            method: 'GET',
            url: this.props.url,
            dataType: 'json',
            success: (data) => {
                this.setState({ data });
            }
        });

    }

    _getImages(start,end) {
       if(start>=0 && end<=this.state.pictureNum){
        return this.state.data.slice(start,end).map((d) => {
            return <ImgBox
                    albumID={d.albumId}
                    id={d.id}
                    key={d.id}
                    title={d.title}
                    url={d.url}
                    thumbnailUrl={d.thumbnailUrl} /> ;
                //TO-DO every 5 box in a row without sepeartion
                
            
        });
       }
    }
//TO-Do decoupling the div of rows
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this._getImages(0,1)}
                </div>
                {/*<div className="row">
                    {this._getImages(5,10)}
                </div>
                <div className="row">
                    {this._getImages(10,15)}
                </div>
                <div className="row">
                    {this._getImages(15,20)}
                </div>
                <div className="row">
                    {this._getImages(20,25)}
                </div>*/}
            </div>
        );
    }
}
export default ImgsContainer;

