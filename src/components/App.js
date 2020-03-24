import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../style/App.css';
// import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="app">
        <div className="calculator-div">
          <Display result={total || next ? total || next : operation} />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
