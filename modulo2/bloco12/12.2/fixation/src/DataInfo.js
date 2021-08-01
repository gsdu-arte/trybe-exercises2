import React, {Component} from 'react';

class DataInfo extends Component {
  render() {
    const { feelingValue, attendanceValue, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Perguntas e Respostas</legend>

        <label htmlFor="feeling">
          Como você está se sentindo? :
          <select
            id="feeling"
            name="feeling"
            onChange={handleChange}
            value={feelingValue}
          >
            <option value="">Selecione</option>
            <option value="anxious">Anciosa(o)</option>
            <option value="excited">Animada(o)</option>
          </select>
        </label>

        <label htmlFor="attendance">
          Marque se for comparecer ao evento:
          <input 
            type="checkbox" name="attendance" id="attendance"
            value={attendanceValue}
            onChange={handleChange} 
          />
        </label>
        
      </fieldset>            
    );
  }
}

export default DataInfo;
