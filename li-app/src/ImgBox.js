import React, { Component } from 'react';
import ToggleButton from './ToggleButton';

class ImgBox extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    }

    this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
    this._handleDescriptonSubmit = this._handleDescriptonSubmit.bind(this);
    this._toggleForm = this._toggleForm.bind(this);
    this._getDescriptions = this._getDescriptions.bind(this);
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

  //save photo descriptions from user input
  _saveDescription() {
    let des_data = this.state.value;
    if (des_data === "") {
      alert("Please enter your description!")
    } else {
      let des_key = "des_" + this.props.id;
      localStorage.setItem(des_key, des_data);

    }
  }
  _handleDescriptionChange(event) {
    this.setState({ value: event.target.value });
  }

  _handleDescriptonSubmit(event) {
    event.preventDefault();
    this._toggleForm();
    this._saveDescription();
  }




  //TO-DO Use state rather than grab by id
  _toggleForm() {
    let display = document.getElementById(this.props.id).style.display
    display === 'none' ?
      display = 'block' :
      display = 'none';
  }

  render() {
    return (
      // <div className="grid-20 mobile-grid-50">
      //   <a type="button" onClick={this._handlePopClick}>
      //     <img className="img-thumbnail"
      //       alt={this.props.title}
      //       src={this.props.thumbnailUrl} />
      //   </a>
      //   {/*{props.child}*/}

      //   <div id={"modal"} className="container">
      //     <span className="close" onClick={this._handlePopClose}>&times;</span>
      //     <img className="modal-img img-responsive" id={this.props.id}
      //       src={this.props.url} alt={this.props.title} />
      //     <div id="title">
      //       <h4 className="text-center" >{this.props.title}</h4>
      //       <p className="text-center" >{this.state.value}</p>

      //       <form onSubmit={this._handleDescriptonSubmit}>

      //         <div className="form-group">
      //           <div id="des-form">
      //             <textarea className="form-control btn-block" rows="3"
      //               placeholder="Write your Description Here"
      //               value={this.state.value}
      //               onChange={this._handleDescriptionChange}
      //             />
      //             <p>
      //               <button type="button" className="btn btn-danger">Cancel</button>
      //               <button type="submit"
      //                 className="btn btn-success">Save</button>
      //             </p>
      //           </div>

      //           {/*TO-DO pass state to the ToggleButton*/}
      //           <ToggleButton class="btn btn-primary"
      //             on="Add/Edit Description"
      //             off="Save Description"
      //             id="des-form" />


      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
      <Thumbnail title={this.props.title}
        thumbnailUrl={this.props.thumbnailUrl}
        url = {this.props.url} />
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

  _renderModal() {
    if (this.state.isClicked) {
      return (
        <Modal id={this.props.id}
          title={this.props.title}
          url={this.props.url}
          style={this.state.style}
        />
      );
    }
  }

  render() {
    return (
      <div className="grid-20 mobile-grid-50">
        <a type="button" onClick={this._handleImgClick}>
          <img className="img-thumbnail"
            alt={this.props.title}
            src={this.props.thumbnailUrl} />
        </a>
        {this._renderModal()}
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

  //TO-DO CHANGE STATE
  _handlePopClose() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    if (this.state.isOpen)
      this.setState({ style: { display: "none" } });
  }

  render() {
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
      </div>

    );
  }
}

function DescriptionFrom(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <div id="des-form">
          <textarea className="form-control btn-block" rows="3"
            placeholder="Write your Description Here"
            value={props.value}
            onChange={props.onChange}
          />
          <p>
            <button type="button" className="btn btn-danger">Cancel</button>
            <button type="submit" className="btn btn-success">Save</button>
          </p>
        </div>

        {props.children}


      </div>
    </form>
  );
}