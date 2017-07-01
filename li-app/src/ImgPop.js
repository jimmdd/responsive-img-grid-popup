import React, { Component } from 'react';

//handle image pop up modal
class ImgPop extends Component() {
    render() {
        return (
            <div id="modal" className="container" style={this.props.img_props.style}>
          <span className="close">&times;</span>
          <img className="modal-img img-responsive" id={this.props.id}
            src={this.props.url} alt = {this.props.title} />
          <div id="title">
            <h5>{this.props.title}</h5>
          </div>
        </div>
        );
    }

}
export default ImgPop;