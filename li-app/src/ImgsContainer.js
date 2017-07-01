import React, { Component } from 'react';
import ImgBox from './ImgBox';

class ImgsContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
   
    componentDidMount() {
        this._jsfetchData();
    }

    //Vanilia JS ajax call
    _jsfetchData() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.props.url, true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    this.setState({ data });
                } else {
                    console.log(xhr.statusText);
                }
            }
        }.bind(this);
        xhr.onerror = function (e) {
            console.error(xhr.statusText)
        }
        xhr.send(null);
    }

        _getImages() {
            return this.state.data.slice(0, this.props.picNum).map((d) => {
                return <ImgBox
                            albumID={d.albumId}
                            id={d.id}
                            key={d.id}
                            title={d.title}
                            url={d.url}
                            thumbnailUrl={d.thumbnailUrl} />;
            });
        }
    
    render() {
        return (
            <div className="grid-container">
                    {this._getImages()}
            </div>
        );
    }
}
export default ImgsContainer;

