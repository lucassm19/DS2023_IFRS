import React from 'react';
import axios from 'axios';
function App() {
  axios({
    method: 'get',
    url: 'https://fakerestapi.azurewebsites.net/api/v1/Books'
  })
    .then(response => {
      // manipular dados de resposta
      response.data.map(livro => {
        console.log(`${livro.title}`);
        return null;
      });
    })
    .catch(err => {
      // manipular erros
      console.log(err);
    });
  return (
    <p>Listagem de livros</p>
  );
}
export default App;