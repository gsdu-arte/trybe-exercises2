// Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado

import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    

    return (
      <div>
        <h1>Estados e React - Primeiro Form</h1>
        <form className="form">

          <label htmlFor="name">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </label>

          <label htmlFor="feeling">
            Como você está se sentindo:
            <select
              id="feeling"
              name="feeling"
              defaultValue=""
            >
              <option value="">Selecione</option>
              <option value="anxious">Anciosa(o)</option>
              <option value="excited">Animada(o)</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

export default Form;
