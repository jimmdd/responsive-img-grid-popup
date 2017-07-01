import React, { Component } from 'react';
//import ImgPop from './ImgPop';
import ToggleButton from './ToggleButton';

// function popModal(props) {
//   const { id, title, albumid, url, style } = props;
//   return (
//     <div id="modal" className="container" >
//       <span className="close">&times;</span>
//       <img className="img-responsive" id={props.id}
//         src={props.url} alt={props.title} />
//       <div id="caption">
//         <h5>{props.title}</h5>
//       </div>
//       {props.children}
//     </div>
//   );
// }
// function popTemp() {
// <div id="modal" className="container">
//   <span className="close" onClick={this._handlePopClose.bind(this)}>&times;</span>
//   <img className="modal-img img-responsive" id={this.props.id}
//     src={this.props.url} alt={this.props.title} />
//   <div id="title">
//     <h5>{this.props.title}</h5>
//   </div>
// </div>
// }


class ImgBox extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
    }
    this._handlePopClick = this._handlePopClick.bind(this);
    this._hanldePopClose = this._handlePopClose.bind(this);
    this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
    this._handleDescriptonSubmit = this._handleDescriptonSubmit.bind(this);
    this._toggleForm = this._toggleForm.bind(this);
    // this._saveDescriptions = this._saveDescriptions.bind(this);
    this._getDescriptions = this._getDescriptions.bind(this);
  }

 componentWillMount(){
   this._getDescriptions();
 }
  //get photo descriptions from local storage
  _getDescriptions() {
    let des_key = "des_"+this.props.id;
    let des_val = localStorage.getItem(des_key);
    if(this.state.value==='')
      this.setState({value:des_val});
  }

  //save photo descriptions from user input
  _saveDescription() {
    let des_data = this.state.value;
     if(des_data===''){
      alert("Please enter your description!")
    }else{
      let des_key = "des_"+this.props.id;
      localStorage.setItem(des_key, des_data);
      
    }
  }

  _handlePopClick() {
    console.log("click" + this.props.id);
    document.getElementById("modal").style.display = 'block';
  }

  _handlePopClose() {
    document.getElementById("modal").style.display = 'none';
  }

  _handleDescriptionChange(event) {
    this.setState({ value: event.target.value });
  }

  _handleDescriptonSubmit(event) {
    event.preventDefault();
    this._toggleForm();
    this._saveDescription();
  }

 _toggleForm(){
   let display = document.getElementById(this.props.id).style.display
    display==='none' ?
      display='block' :
      display='none';
  }

  render() {
    const img = {
      id: this.props.id,
      url: this.props.url,
      albumid: this.props.albumid,
      title: this.props.title,
      style: 'display: block'
    }
    console.log(localStorage.getItem("descriptions"));
    return (
      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
        <a type="button" onClick={this._handlePopClick}>
          <img className="img-thumbnail"
            alt={this.props.title}
            src={this.props.thumbnailUrl} />
        </a>
        <div id={"modal"} className="container">
          <span className="close" onClick={this._handlePopClose}>&times;</span>
          <img className="modal-img img-responsive" id={this.props.id}
            src={this.props.url} alt={this.props.title} />
          <div id="title">
            <h4 className = "text-center" >{this.props.title}</h4>
             <p className = "text-center" >{this.state.value}</p>

            <form onSubmit={this._handleDescriptonSubmit}>

              <div className="form-group">
                <div id = "des-form">
              <textarea className="form-control btn-block" rows="3" 
                placeholder="Write your Description Here" 
                value={this.state.value} 
                onChange={this._handleDescriptionChange} 
                />
                 <p>
              <button type ="button" className="btn btn-danger">Cancel</button>
              <button type="submit" 
              className="btn btn-success">Save</button>
              </p>
              </div>

              {/*TO-DO pass state to the ToggleButton*/}
              <ToggleButton class ="btn btn-primary" 
                on="Add/Edit Description"
                off="Save Description"
                id = "des-form"/>
           
              
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgBox;