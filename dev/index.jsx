import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render () {
    return <p> Hello, {this.props.greetTarget}</p>;
  }
}

ReactDOM.render(<div>
  <HelloWorld greetTarget="Batman"/>
  <HelloWorld greetTarget="Catwomen"/>
  <HelloWorld greetTarget="Nicolas Cage"/>
  <HelloWorld greetTarget="Iron Man"/>
  <HelloWorld greetTarget="Mega Man"/>
  <HelloWorld greetTarget="Bono"/>
  </div>,
  document.getElementById('container')
);
