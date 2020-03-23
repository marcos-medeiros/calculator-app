import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../style/App.css';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
      current: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const state = Calculate(this.state, btnName);
    this.setState(state);
  }

  render() {
    const { current } = this.state;
    return (
      <div className="app">
        <div className="calculator-div">
          <Display result={current} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
