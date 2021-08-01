import React, {Component} from 'react';

class PersonalInfo extends Component {
  render() {
    const { nameValue, emailValue, ageValue, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Informação Pessoal</legend>

        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={nameValue}
          />
          
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={emailValue}
          />         
        </label>

        <label htmlFor="age">
          Idade:
          <input
            id="age"
            name="age"
            type="number"
            onChange={handleChange}
            value={ageValue}
          />
        </label>
      </fieldset>
    );
  }
}

export default PersonalInfo;