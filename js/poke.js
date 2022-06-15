// variables html
const contenedor = document.getElementsByClassName('container')
const div_pokes = document.querySelector('.pokes')
const div_cuadro = document.querySelector('.cuadro')
const div_modal = document.querySelector('#myModal')
// funcion imagen
const pokes = () => {
  for (let i = 1; i <= 150; i++) {
    div_pokes.innerHTML += `
    <img type="button" data-bs-toggle="modal" data-bs-target="#myModal${i}" id=${i} onclick="datos('${i}')" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">
    `
    div_modal.innerHTML += `
    <!-- Modal -->
      <div class="modal fade" id="myModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title" id="exampleModalLabel${i}">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body${i}">
              ...
            </div>
          </div>
        </div>
      </div>
    `
  }
}
pokes()
// funcion para los datos de la api
const datos = (i) => {
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/${i}`, (datos) => {
    const nom = datos.name
    const tipo = datos.types[0].type.name
    const alto = datos.height // ft
    const peso = datos.weight // xD (kg)
    const nombreModal = document.querySelector(`#exampleModalLabel${i}`)
    const cuerpoModal = document.querySelector(`.modal-body${i}`)
    nombreModal.textContent = nom
    // Modal
    cuerpoModal.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png" class="card-img-top" alt="img-poke">
      <div class="card-body">
        <h5 class="card-title">Types</h5>
        <ul>
          <li>${tipo}</li>
        </ul>
        <h5 class="card-title">Height</h5>
        <p>${alto}</p>
        <h5 class="card-title">Weight</h5>
        <p>${peso}</p>
      </div>
    </div>     
  `
    // Cuadro
    div_cuadro.innerHTML = `
      <h1>${nom}</h1>
      <img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">      
      <h5>Types</h5>
      <ul>
        <li>${tipo}</li>
      </ul>
      <h5>Height</h5>
      <p>${alto}</p>
      <h5>weight</h5>
      <p>${peso}</p>      
    ` // hacerlo con createElement, setAtribute, getAtribute, querySelectorAll
    
  })
}

let lupas = document.querySelectorAll(".pokes > img")
for (let j = 0; j < lupas.length; j++) {
  lupas[j].addEventListener("mouseover", function () {
    this.classList.add('lupa')
  })
}

for (let k = 0; k < lupas.length; k++) {
  lupas[k].addEventListener("mouseout", function () {
    this.classList.remove('lupa')
  })
}