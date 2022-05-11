
import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';

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
            // Simple DELETE request with fetch
            fetch('http://localhost:8084/expense/' + item.id, { method: 'DELETE' })
              .then(() => this.setState({ status: 'Delete successful' }));
          }
          return posAtual !== index;
        }),
      }
    );
  }

  escutadorDeSubmit = item => {
    this.setState({ items: [...this.state.items, item] })



    fetch('http://localhost:8084/expense', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        "amount": 475.75,
        "userId": "622fa59e440e9173b9982919",
        "category": "HOUSE",
        "spendAt": "2022-03-14",
        "description": "test description"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    }).then(function (data) {
      console.log(data);
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    });


    /*
   fetch('http://localhost:8084/expense/', {
      mode :'no-cors',
      method: 'POST',  
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { description: 'dwd', amount: 10.50, category: 'PARTY', spendAt: 'wdwd', userId: '622213a205cbe91ac023f189' })
    })
      .then(() => this.setState({ status: 'Created successful' }));


      (async () => {
        const rawResponse = await fetch('http://localhost:8084/expense/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({description: 'dwd', amount: 'wdwdw', category: 'dwdwd', spendAt: 'wdwd', userId: '622213a205cbe91ac023f189'})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
*/
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>
          <Tabela items={this.state.items} removeItem={this.removeItem} DataisLoaded={this.state.DataisLoaded} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }

}

export default App;
