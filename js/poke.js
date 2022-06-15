// variables html
const contenedor = document.getElementsByClassName('container')
const div_pokes = document.querySelector('.pokes')
const div_cuadro = document.querySelector('.cuadro')
// funcion imagen
const pokes = () => {
  for (let i = 1; i <= 150; i++) {
    div_pokes.innerHTML += `
    <img id=${i} onclick="datos('${i}')" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">
    `
  }
}
pokes()
// funcion para los datos de la api
const datos = (i) => {
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/${i}`, (datos) => {
    const nom = datos.name
    const tipo = datos.types[0].type.name
    const alto = datos.height
    const ancho = datos.weight
    const arr = [i, nom, tipo, alto, ancho]
    div_cuadro.innerHTML = `
  <h1>${nom}</h1>
  <img id=${i} onclick="datos('${i}')" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">
  <h5>Types</h5>
  <ul>
    <li>${tipo}</li>
  </ul>
  <h5>Height</h5>
  <p>${alto}</p>
  <h5>weight</h5>
  <p>${ancho}</p>
  `
  })
}