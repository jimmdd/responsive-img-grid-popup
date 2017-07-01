import React, { Component } from 'react';
//import ImgPop from './ImgPop';

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

// function descriptionForm(props) {
//   return (
//     <form >
//       <input />
//       <button>submit</button>
//     </form>
//   );
// }

class ImgBox extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  //get description of the img that user stored in local json stored by id
  _getDescriptions() {
    return localStorage.getItem("description");
  }
  //save the description from user input
  _saveDescription() {
    let des_data = this.state.value;
    localStorage.setItem("description", des_data);
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
    this._saveDescription();
  }

  render() {
    const img = {
      id: this.props.id,
      url: this.props.url,
      albumid: this.props.albumid,
      title: this.props.title,
      style: 'display: block'
    }

    return (
      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
        <a type="button" onClick={this._handlePopClick.bind(this)}>
          <img className="img-thumbnail"
            alt={this.props.title}
            src={this.props.thumbnailUrl} />
        </a>
        <div id={"modal"} className="container">
          <span className="close" onClick={this._handlePopClose.bind(this)}>&times;</span>
          <img className="modal-img img-responsive" id={this.props.id}
            src={this.props.url} alt={this.props.title} />
          <div id="title">
            <h5>{this.props.title}</h5>
          </div>
          <div id="description">
            <form onSubmit={this._handleDescriptonSubmit.bind(this)}>
              <label>Add new description here</label>
              <input placeholder="Write your Description" value={this.state.value} onChange={this._handleDescriptionChange.bind(this)} />
              <button className="btn btn-default" type="submit">Save</button>
            </form>);
            </div>
        </div>
      </div>
    );
  }
}

export default ImgBox;
