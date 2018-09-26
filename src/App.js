import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const CustomElement = styled.div`
  color: green;
`

const BigElement = CustomElement.extend`
  font-size: 30px;
`

class App extends Component {
  render() {
    return (
      <BigElement>
        Hi sam
      </BigElement>
    );
  }
}

export default App;
