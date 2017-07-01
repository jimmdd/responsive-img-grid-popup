import React, { Component } from 'react';
import ImgBox from './ImgBox';
import jQuery from 'jquery';

class ImgsContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            pictureNum: 25,
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

    _getImages() {
       // let count = 1;
        return this.state.data.slice(0,this.state.pictureNum).map((d) => {
            let imgBox = <ImgBox
                    albumID={d.albumId}
                    id={d.id}
                    key={d.id}
                    title={d.title}
                    url={d.url}
                    thumbnailUrl={d.thumbnailUrl} /> ;
                //TO-DO every 5 box in a row
                return imgBox;
            
        });

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this._getImages()}
                </div>
            </div>
        );
    }
}
export default ImgsContainer;