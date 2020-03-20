import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }
  
  render() {
    return (
      <div>
        <Display result={this.state.result}/>
        <ButtonPanel />
      </div>
    );
  }

}

export default App;
