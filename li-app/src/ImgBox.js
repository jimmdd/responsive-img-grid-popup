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
      style: { display: "none" },
      isClicked: false
    }
    this._handleImgClick = this._handleImgClick.bind(this);
  }

  _handleImgClick() {
    this.setState({ style: { display: "block" },
                    isClicked: true
                  });
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
          style={this.state.style}
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
      isToggleOn: true,
      style: { display: "none" }
    }
    this._handlePopClose = this._handlePopClose.bind(this);
  }

  componentWillMount() {
    this.setState({ style: this.props.style });
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

  _getDescriptionFromChild(v) {
    this.setState({value: v});
  }
 _changeToggle(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
 }

  //TO-DO CHANGE STATE
  _handlePopClose() {
    this.state.isOpen? 
    this.props.close() :
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
    // this.state.isOpen?
    //   this.setState({ style: { display: "none" } }):
    //   this.setState({ style: { display: "block" } });
    
  }

  render() {
    console.log(this.props.id);
    return (
      <div id={"modal"} className="container" style={this.state.style}>
        <span className="close" onClick={this._handlePopClose}>&times;</span>
        <img className="modal-img img-responsive" id={this.props.id}
          src={this.props.url} alt={this.props.title} />
        <div id="title">
          <h4 className="text-center" >{this.props.title}</h4>
          <p className="text-center" >{this.state.value}</p>
        </div>
        {this.props.children}
        {this.state.isToggleOn? 
        <DescriptionForm id = {this.props.id} des_get = {this._getDescriptionFromChild.bind(this)}/>
        :<div>Add/Edit Description</div>}
        
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
    console.log(des_key);
    let des_val = localStorage.getItem(des_key);
    if (this.state.value === "" && des_val != null)
      this.setState({ value: des_val });
  }

     //save photo descriptions from user input
  _saveDescription() {
    alert("saving in progress");
    let des_data = this.state.value;
    if (des_data === "") {
      alert("Please enter your description!")
    } else {
      let des_key = "des_" + this.props.id;
      localStorage.setItem(des_key, des_data);
      this.props.des_get(des_data);
      //TO-DO HIDE FORM AFTER SAVE
    }
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
          />
          <p>
            <button type="button" className="btn btn-danger">Cancel</button>
            <button type="submit" className="btn btn-success">Save</button>
          </p>
        </div>

        {this.props.children}

      </div>
    </form>
  );
}
}