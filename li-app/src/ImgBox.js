import React, { Component } from 'react';
class ImgBox extends Component {

//TO-DO delete ImgBOX class and just use Thumbnail
  render() {
    return (
      <Thumbnail title={this.props.title}
        thumbnailUrl={this.props.thumbnailUrl}
        url = {this.props.url} 
        id = {this.props.id}/>
    );
  }
}

export default ImgBox;

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }
    this._handleImgClick = this._handleImgClick.bind(this);
  }

  _handleImgClick() {
    this.setState({isClicked: true});
  }
  _closeModal(){
    this.setState({isClicked: false});
  }

  render() {
    return (
      <div className="grid-20 mobile-grid-50">
        <a type="button" onClick={this._handleImgClick}>
          <img className="img-thumbnail"
            alt={this.props.title}
            src={this.props.thumbnailUrl} />
        </a>
        {this.state.isClicked? <Modal id={this.props.id}
          title={this.props.title}
          url={this.props.url}
          close = {this._closeModal.bind(this)}
        /> : <div></div>}
      </div>
    );
  }
}

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
    let des_key = "des_" + this.props.id;
    let des_val = localStorage.getItem(des_key);
    if (this.state.value === "" && des_val != null)
      this.setState({ value: des_val });
  }
  //allow form component update description when save
  _getDescriptionFromChild(v) {
    this.setState({value: v});
  }

 _changeToggle(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
 }

  _handleModalClose() {
    this.state.isOpen? 
    this.props.close() :
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div id={"modal"} className="container">
        <span className="close" onClick={this._handleModalClose}>&times;</span>
        <img className="modal-img img-responsive" id={this.props.id}
          src={this.props.url} alt={this.props.title} />
        <div id="title">
          <h4 className="text-center" >{this.props.title}</h4>
          <p className="text-center" >{this.state.value}</p>
        
        {
          this.state.isToggleOn? 
        <DescriptionForm id = {this.props.id} 
                des_get = {this._getDescriptionFromChild.bind(this)}
                close = {this._changeToggle}
                />
        : <button className="btn btn-primary" type="button" 
              onClick={this._changeToggle}>
          {this.state.value===''? 'Add New' : 'Edit'} Description
          </button>
          } 
          </div>  
      </div>
    );
  }
}

class DescriptionForm extends Component{
  constructor(){
    super();
    this.state={
        value:"",
    }
    this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
    this._handleDescriptonSubmit = this._handleDescriptonSubmit.bind(this);
    this._saveDescription = this._saveDescription.bind(this);
    this._cancelEdit = this._cancelEdit.bind(this);
  }

  componentDidMount(){
      this._getDescriptions();
  }
  _handleDescriptionChange(event) {
    this.setState({ value: event.target.value });
  }
  _handleDescriptonSubmit(event) {
    event.preventDefault();
    //this._toggleForm();
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
  _cancelEdit(){
      this.props.close();
  }

  render(){
  return (
    <form onSubmit={this._handleDescriptonSubmit}>
      <div className="form-group">
        <div id="des-form">
          <textarea className="form-control btn-block" rows="3"
            placeholder="Write your Description Here"
            value={this.state.value}
            onChange={this._handleDescriptionChange}
            autoFocus
          />
          <p>
            <button type="button" className="btn btn-danger"
                    onClick = {this._cancelEdit}
                    >Cancel</button>
            <button type="submit" className="btn btn-success">Save</button>
          </p>
        </div>
      </div>
    </form>
  );
}
}
