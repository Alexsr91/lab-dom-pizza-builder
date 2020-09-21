// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true, // we add 
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(muns => {
    if (state.mushrooms) {
      muns.style.visibility = 'visible';
    } else {
      muns.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(grennpep => {
    if (state.greenPeppers) {
      grennpep.style.visibility = 'visible';
    } else {
      grennpep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let wsauce = document.querySelector('.sauce')
    if (state.whiteSauce) {
      wsauce.style.visibility = 'visible';
    } else {
      wsauce.style.visibility = 'hidden';
    }
}

function renderGlutenFreeCrust() {
  let base = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    base.style.visibility = 'visible';
  } else {
    base.style.visibility = 'hidden';
  }
}

function renderButtons() {

    if (state.pepperoni === true){
  document.querySelector('.btn-pepperoni').classList.add("active")

  }else{
     document.querySelector('.btn-pepperoni').classList.remove("active")
 }
}

function renderPrice() {
document.querySelector('.panel.price ul').innerHTML = "";
let ul = document.querySelectorAll('.panel.price ul');
let li = document.createElement("li");
let pepe = document.querySelectorAll('.panel.price ul li')[0].remove()
 if (state.pepperoni === true){
ul.createElement(pepe)
}else{
  
 }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});