// 1-Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log().

// 2-Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!

// 3-Garanta acesso ao objeto this na função que você declarou.

// 4-Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// Dica: Uma possibilidade é você definir três chaves, uma para cada botão!

// 5-Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.

// 6-Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

// 7-Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.

// 8-A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
// Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!

import React from 'react';



class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicksBtn1: 0,
      numClicksBtn2: 0,
      numClicksBtn3: 0,
    };
    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);
    this.changeBtnColor = this.changeBtnColor.bind(this)
  }

  handleClickBtn1() {
    this.setState((estadoAnterior, _props) => ({
      numClicksBtn1: estadoAnterior.numClicksBtn1 + 1,
    }));
    console.log('Clicou!');
    console.log(`Botão Um - Cor: ${this.changeBtnColor(this.state.numClicksBtn1 + 1)}`);
  }  
  handleClickBtn2() {
    this.setState(({ numClicksBtn2 }) => ({
      numClicksBtn2: numClicksBtn2 + 1,
    }))
    console.log('Clicou!');
    console.log(`Botão Dois - Cor: ${this.changeBtnColor(this.state.numClicksBtn2 + 1)}`);
  }  
  handleClickBtn3() {
    this.setState((estadoAnterior, _props) => ({
      numClicksBtn3: estadoAnterior.numClicksBtn3 + 1,
    }))
    console.log('De novo?! Larga de ser curioso sô!!!');
    console.log(`Botão Três - Cor: ${this.changeBtnColor(this.state.numClicksBtn3 + 1)}`);
  }

  changeBtnColor(numClicks) {
    return numClicks % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { numClicksBtn1, numClicksBtn2, numClicksBtn3 } = this.state;
    
    return (
      <div>
        <button onClick={this.handleClickBtn1} style={{ backgroundColor: this.changeBtnColor(numClicksBtn1) }}>Botão Um - Clicks: {numClicksBtn1}</button>

        <button onClick={() => this.handleClickBtn2()} style={{ backgroundColor: this.changeBtnColor(numClicksBtn2) }}>Botão Dois - Clicks: {numClicksBtn2}</button>
        
        <button onClick={this.handleClickBtn3} style={{ backgroundColor: this.changeBtnColor(numClicksBtn3) }}>Botão Três - Clicks: {numClicksBtn3}</button>
    </div>
    );
  }
}

export default Buttons;
