
import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';

class App extends Component {


  // Constructor 
  constructor(props) {

    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {

      fetch(
        "http://localhost:8084/expense"
      )
        .then((res) => res.json())
        .then(
          (json) => {
            this.setState({
              items: json,
              DataisLoaded: true
            });
          });
        

}

removeItem = index => {

  const { items } = this.state;

  this.setState(
    {
      items: items.filter((item, posAtual) => {
     
        if (posAtual === index) {
          console.log("AQUIIIIIIIIIIIIIii" , item)
          // Simple DELETE request with fetch
          fetch('http://localhost:8084/expense/' + item.id, { method: 'DELETE' })
            .then(() => this.setState({ status: 'Delete successful' }));
        }
        return posAtual !== index;
      }),
    }
  );
}



render() {
  return (
    <div className="App" >
      <Tabela items={this.state.items} removeItem={this.removeItem} DataisLoaded={this.state.DataisLoaded} />
    </div>
  );
}

}

export default App;
