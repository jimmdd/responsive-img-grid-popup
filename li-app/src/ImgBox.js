import React, { Component } from 'react';
import ImgPop from './ImgPop';

// function popModal(props) {
//   return (
//     <div id="modal" className="container" >
//       <span className="close">&times;</span>
//       <img className="img-responsive" id={props.id}
//         src={props.url} alt={props.title}/>
//       <div id="caption">
//         <h5>{props.title}</h5>
//       </div>
//       {props.children}
//     </div>
//   );
// }
// function popTemp(){
//   <div id="modal" className="container" style={this.props.style}>
//           <span className="close">&times;</span>
//           <img className="modal-img img-responsive" id={this.props.id}
//             src={this.props.url} />
//           <div id="title">
//             <h5>{this.props.title}</h5>
//           </div>
//         </div>
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
  
  //get description of the img that user stored in local json stored by id
  _getDescription() {

  }
  //save the description from user input
  _saveDescription() {

  }

  // //create pop up modal 
  // _createPop() {
  //   return <popModal url={this.props.url}
  //     id={this.props.id}
  //     title={this.props.title}
  //   >
  //     <button type="button">Create Description</button>
  //   </popModal>
  // }

  _handlePopClick() {
    console.log("click" + this.state.id);
    document.getElementById("modal")
  }

  render() {
    const img_props={
     img_id: this.props.id,
     img_url: this.props.url,
     img_albumid: this.props.albumid,
     img_title: this.props.title,
     style: 'display: block'
    }

    return (
      <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
        <a type ="button" onClick={this._handlePopClick.bind(this)}>
          <img className="img-responsive img-thumbnail"
            alt={this.props.title}
            src={this.props.thumbnailUrl} />
        </a>
        <ImgPop img_props={img_props} />
      </div>
    );
  }
}

export default ImgBox;
