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
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    ` // hacerlo con createElement, setAtribute, getAtribute, querySelectorAll
  })
}

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('click', () => {
// })

// $("#myModal").on("shown.bs.modal", function () { 
//   alert('Hi');
// }).modal('show')

// let lupas = document.querySelectorAll(".pokes > img")
// for (let j = 0; j < lupas.length; j++) {
//   lupas[j].addEventListener("mouseover", function () {
//     this.classList.add('lupa')
//   })
// }

// for (let k = 0; k < lupas.length; k++) {
//   lupas[k].addEventListener("mouseout", function () {
//     this.classList.remove('lupa')
//   })
// }