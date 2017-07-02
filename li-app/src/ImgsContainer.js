import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

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
        xhr.send(null);
    }

    _getImages() {
        return this.state.data.slice(0, this.props.picNum).map((d) => {
            return (
                <Thumbnail
                    id={d.id}
                    key={d.id}
                    title={d.title}
                    url={d.url}
                    thumbnailUrl={d.thumbnailUrl}
                />
            )
        });
    }

    render() {
        return (
            <div className="grid-container">
                <div className="grid-100 align-center">
                    {this._getImages()}
                </div>
            </div>
        );
    }
}
export default ImgsContainer;

