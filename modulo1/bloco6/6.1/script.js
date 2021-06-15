function selectState() {
  let allStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  let state = document.getElementById('states');
  for (let index = 0; index < allStates.length; index += 1) {
    let option = document.createElement('option');
    state.appendChild(option).innerText = allStates[index];
  }
}
selectState();

