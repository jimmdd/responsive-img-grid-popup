import React, { Component } from 'react';
import DescriptionForm from './DescriptionForm';

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            isOpen: true,
            isToggleOn: false
        }
        this._handleModalClose = this._handleModalClose.bind(this);
        this._changeToggle = this._changeToggle.bind(this);
    }

    componentDidMount() {
        this._getDescriptions();
    }

    //get photo descriptions from local storage
    _getDescriptions() {
        let des_key = "des_" + this.props.albumId+this.props.id;
        let des_val = localStorage.getItem(des_key);
        if (this.state.value === "" && des_val != null)
            this.setState({ value: des_val });
    }
    //allow form component update description when save
    _getDescriptionFromChild(v) {
        this.setState({ value: v });
    }

    _changeToggle() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    _handleModalClose(event) {
        if(event.target.id!=="des-open"){
        this.state.isOpen ?
            this.props.close() :
            this.setState(prevState => ({
                isOpen: !prevState.isOpen
            }));
        }
    }

    render() {
        console.log(this.props.albumId);
        return (
                <a onClick={this._handleModalClose} style={{textDecoration: "none"}}>

            <div id={"modal"} className="container">
                    <span className="close" onClick={this._handleModalClose}>&times;</span>
                    <img className="modal-img img-responsive" id={this.props.id}
                        src={this.props.url} alt={this.props.title} />
                
                <div id="title">
                    <h4 className="text-center" >{this.props.title}</h4>
                    <p className="text-center" >{this.state.value}</p>

                    {
                        this.state.isToggleOn ?
                            <DescriptionForm id={this.props.id}
                                albumId = {this.props.albumId}
                                des_get={this._getDescriptionFromChild.bind(this)}
                                close={this._changeToggle}
                            />
                            : <button id = "des-open" className="btn btn-primary" type="button"
                                onClick={this._changeToggle}>
                                {this.state.value === '' ? 'Add New' : 'Edit'} Description
                            </button>
                    }
                </div>

            </div>
            </a>

        );
    }
}
export default Modal;
