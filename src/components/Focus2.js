import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Focus2 extends Component {

  constructor(props) {
    super(props);

    this.focus = this.focus.bind(this);
  }

  focus() {
    const componentNode = ReactDOM.findDOMNode(this);
    componentNode.querySelector('input').focus();
  }

  render() {
    return (
      <div>
        <label htmlFor="demoSurname">Surname</label>
        <input className="form-control"
               id="demoSurname"
               type="text"/>
        <button className="btn btn-primary"
                type="button"
                onClick={this.focus}>Focus Surname
        </button>
      </div>
    );
  }
}

export default Focus2;