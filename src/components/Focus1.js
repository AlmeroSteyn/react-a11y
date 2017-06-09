import React, { Component } from 'react';

class Focus1 extends Component {

  constructor(props) {
    super(props);

    this.focus = this.focus.bind(this);
  }


  focus() {
    this.nameInput.focus();
  }

  render() {
    return (
      <div>
        <label htmlFor="demoIds">Name</label>
        <input className="form-control"
               id="demoId"
               type="text"
               ref={(input) => {
                 this.nameInput = input;
               }}/>
        <button className="btn btn-primary"
                type="button"
                onClick={this.focus}>Focus name
        </button>
      </div>
    );
  }
}

export default Focus1;