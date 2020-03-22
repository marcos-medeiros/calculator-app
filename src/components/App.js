import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="app">
        <div className="calculator-div">
          <Display result={result} />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
