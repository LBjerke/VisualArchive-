import React from 'react';
import ReactDOM from 'react-dom';
import FirstModule from './modules/index';
class HelloWorld extends React.Component {



  render () {
    var wordStyle = {
      color : '#FF0000',

    };
    return <div style={wordStyle}> {FirstModule.getDay(0)}, {this.props.greetTarget}</div>;
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
