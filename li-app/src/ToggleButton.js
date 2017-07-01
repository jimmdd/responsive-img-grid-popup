import React, { Component } from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      type: 'button',
      style: 'none'
    };

    this._handleClick = this._handleClick.bind(this);
    this._changeType = this._changeType.bind(this);
    this._toggleForm = this._toggleForm.bind(this);
  }
  componentDidMount(){
   this._toggleForm();
  }

  _handleClick() {
    this._changeType();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  this._toggleForm();
  }
  _changeType() {
   this.state.isToggleOn?
   this.setState({type: "button"}) :
    this.setState({type: "submit"});
  }

  _toggleForm(){
    this.state.isToggleOn?
      this.setState({style: "block"}) :
    this.setState({style: "none"});
    document.getElementById(this.props.id).style.display = this.state.style;
  }

  render() {
    return (
      <button className={this.props.class} type={this.state.type} onClick={this._handleClick}>
        {this.state.isToggleOn ? this.props.on : this.props.off}
      </button>
    );
  }
}

export default ToggleButton;
  