import React, { Component } from 'react';
import Modal from './Modal';

class Thumbnail extends Component {
    constructor() {
        super();
        this.state = {isClicked: false}
        this._handleImgClick = this._handleImgClick.bind(this);
        this._closeModal = this._closeModal.bind(this);
    }

    _handleImgClick() {
        this.setState({ isClicked: true });
    }
    _closeModal() {
        this.setState({ isClicked: false });
    }

    render() {
        return (
            <div className="grid-20 mobile-grid-50">
                <a  onClick={this._handleImgClick}>
                    <img className="img-thumbnail"
                        alt={this.props.title}
                        src={this.props.thumbnailUrl} />
                </a>
                {
                    this.state.isClicked ? 
                    <Modal id={this.props.id}
                        title={this.props.title}
                        url={this.props.url}
                        close={this._closeModal}
                    /> : <div id="nth"></div>
                }
            </div>
        );
    }
}
export default Thumbnail;