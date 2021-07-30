// 1-Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado

// 2-Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.

// 3-Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.

// 4-Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos. Acrescente um ao seu formulário.

// 5-Encapsule alguns dos seus campos num fieldset . Entenda como ele funciona lendo a documentação.

// 6-Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.

// 7-Faça duas validações em um desses componentes filhos e uma em um outro.

// 8-Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.
// 🦜 Dica: Se algum dos componentes transmitir true para a função que fará o handle dos erros, qual valor deve ser armazenado no Estado ?


import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      age: 0,
      feeling: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleFeelingChange = this.handleFeelingChange.bind(this);
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

  handleAgeChange(event) {
    this.setState({
      age: event.target.value,
    });
  }

  handleFeelingChange(event) {
    this.setState({
      feeling: event.target.value,
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

          <label htmlFor="age">
            Idade:
            <input
              id="age"
              name="age"
              type="number"
              onChange={this.handleAgeChange}
              value={this.state.age}
            />
          </label>

          <label htmlFor="feeling">
            Como você está se sentindo:
            <select
              id="feeling"
              name="feeling"
              onChange={this.handleFeelingChange}
              value={this.state.feeling}
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
