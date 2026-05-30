
  let pronoun = ['el', 'su', 'este'];
  let adj = ['mejor', 'gran', 'nuevo', 'simple'];
  let noun = ['carro', 'robot', 'video', 'restaurante', 'buscador'];
  

  for(let letra1 of pronoun) {
    for(let letra2 of adj) {
      for(let letra3 of noun) {
       console.log(letra1 + letra2 + letra3 + '.com'); 
      }
    }
  }