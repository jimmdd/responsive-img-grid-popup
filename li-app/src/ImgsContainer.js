import React, { Component } from 'react';
import ImgBox from './ImgBox';

class ImgsContainer extends Component {
constructor(){
    super();
    this.state = {
        data: [],
        pictureNum: 25,
        value: '',
    }
}

componentWillMount(){

}

_getImages(){
    //TO-DO get data and map it and return img box
}
_fetchImages(){
    return <ImgBox />
}

    render() {
        return (
            <div className='container'>
                <div className="row">
                {this._fetchImages()}
                </div>
            </div>
        );
    }
}
export default ImgsContainer;