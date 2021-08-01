// 1-Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado

// 2-Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.

// 3-Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.

// 4-Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos. Acrescente um ao seu formulário.

// 5-Encapsule alguns dos seus campos num fieldset. Entenda como ele funciona lendo a documentação.

// 6-Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.

// 7-Faça duas validações em um desses componentes filhos e uma em um outro.

// 8-Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.
// 🦜 Dica: Se algum dos componentes transmitir true para a função que fará o handle dos erros, qual valor deve ser armazenado no Estado ?


import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import DataInfo from './DataInfo';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      age: 0,
      feeling: '',
      attendance: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handleAgeChange = this.handleAgeChange.bind(this);
    // this.handleFeelingChange = this.handleFeelingChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value,
    });
  }

  // handleEmailChange(event) {
  //   this.setState({
  //     email: event.target.value,
  //   });
  // }

  // handleAgeChange(event) {
  //   this.setState({
  //     age: event.target.value,
  //   });
  // }

  // handleFeelingChange(event) {
  //   this.setState({
  //     feeling: event.target.value,
  //   });
  // }

  render() {
    const { name, email, age, feeling, attendance } = this.state
    return (
      <div>
        <h1>Estados e React - Primeiro Form</h1>
        <form className="form">
          <PersonalInfo 
            nameValue={ name }
            emailValue={ email }
            ageValue={ age }
            handleChange={ this.handleChange }
          />
          
          <DataInfo
            feelingValue={ feeling }
            attendanceValue={ attendance }
            handleChange={ this.handleChange }
          />

          <fieldset>
            <legend>Adicione uma foto ou arquivo:</legend>

            <input type="file" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
