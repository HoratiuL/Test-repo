import React, { Component } from 'react';
import './App.css';
import MyHeader from './components/Header';
import ColorChooser from './components/ColorChooser';
import ColorButtons from './components/ColorButtons';


class App extends Component {
  state = {
    inputColor: "",
    buttonColor: "",
    selectedColor: ""
  }

  onColorChange = (event) => {
    const { value } = event.target;
    const newValue = this.state.selectedColor + value;
    this.setState({
      selectedColor: newValue
    });
  }

  onSelectColor = (color) => {
    this.setState({
      selectedColor: color
    });
  }

  onFocus = () => {
    this.setState({
      inputState: ''
    });
  }

  render() {
    return (
      <div className="App">
      <MyHeader 
      title={"Hello React-Demo" }
      color={this.state.selectedColor}
      />
        <div>
          <ColorChooser 
          selectedColor={this.state.inputColor}
          onColorChange={this.onColorChange}
          onFocus={this.onFocus}
          />
        </div>
        <ColorButtons onSelectColor={this.onSelectColor} />
        <Footer/>
      </div>
    );
  }
}

const Footer = () => {
return<footer>
  <p>ColorChooser Footer</p>
</footer>}

export default App;
