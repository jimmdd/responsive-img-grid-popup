import React, { Component } from 'react';

class DescriptionForm extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
        }
        this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
        this._handleDescriptonSubmit = this._handleDescriptonSubmit.bind(this);
        this._saveDescription = this._saveDescription.bind(this);
        this._cancelEdit = this._cancelEdit.bind(this);
    }

    componentDidMount() {
        this._getDescriptions();
    }
    _handleDescriptionChange(event) {
        this.setState({ value: event.target.value });
    }
    _handleDescriptonSubmit(event) {
        event.preventDefault();
        this._saveDescription();
    }

    //get photo descriptions from local storage
    _getDescriptions() {
        let des_key = "des_" + this.props.id;
        let des_val = localStorage.getItem(des_key);
        if (this.state.value === "" && des_val != null)
            this.setState({ value: des_val });
    }

    //save descriptions from user input
    _saveDescription() {
        let des_data = this.state.value;
        if (des_data === "") {
            alert("Please enter your description!")
        } else {
            let des_key = "des_" + this.props.id;
            localStorage.setItem(des_key, des_data);
            //update parent's decription
            this.props.des_get(des_data);
            //hide input form area
            this.props.close();
        }
    }
    _cancelEdit() {
        this.props.close();
    }

    render() {
        return (
            <form onSubmit={this._handleDescriptonSubmit}>
                <div className="form-group">
                    <div id="des-form">
                        <textarea id ="des-open" className="form-control btn-block" rows="3"
                            placeholder="Write your Description Here"
                            value={this.state.value}
                            onChange={this._handleDescriptionChange}
                            autoFocus
                        />
                        <p>
                            <button id = "des-open" type="button" className="btn btn-danger"
                                onClick={this._cancelEdit}
                            >Cancel</button>
                            <button id = "des-open" type="submit" className="btn btn-success">Save</button>
                        </p>
                    </div>
                </div>
            </form>
        );
    }
}
export default DescriptionForm;