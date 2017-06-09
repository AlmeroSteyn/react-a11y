import React, { Component } from 'react';
import DemoImage from './components/DemoImage';
import Focus1 from './components/Focus1';
import Focus2 from './components/Focus2';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      LazyBlock: null
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  async onClickHandler() {
    const { default: LazyBlock } = await import('./components/LazyBlock');

    this.setState({
      LazyBlock: <LazyBlock/>
    });
  }

  render() {
    return (
      <main className="container">
        <h1>Accessibility in React</h1>
        <DemoImage/>
        <form>
          <Focus1/>
          <Focus2/>
        </form>
        <hr/>
        <button className="btn btn-primary"
                onClick={this.onClickHandler}>Press to load lazy block.
        </button>
        {this.state.LazyBlock || <p>Block not yet loaded...</p>}
      </main>
    );
  }
}

export default App;
