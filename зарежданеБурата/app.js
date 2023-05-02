// initialize variables for each drink
let cocaCola = 0;
let colaZero = 0;
let sprite = 0;
let fanta = 0;
let shweeps = 0;
let tonic = 0;
let fusteaLemon = 0;
let fusteaPeach = 0;
let cappyPortokal = 0;
let cappyPraskova = 0;
let cappyYabulka = 0;
let cappyVishna = 0;

// define function to increment/decrement drink quantity
function updateQuantity(drink, increment) {
  switch (drink) {
    case 'cocaCola':
      cocaCola += increment;
      break;
    case 'colaZero':
      colaZero += increment;
      break;
    case 'sprite':
      sprite += increment;
      break;
    case 'fanta':
      fanta += increment;
      break;
    case 'shweeps':
      shweeps += increment;
      break;
    case 'tonic':
      tonic += increment;
      break;
    case 'fusteaLemon':
      fusteaLemon += increment;
      break;
    case 'fusteaPeach':
      fusteaPeach += increment;
      break;
    case 'cappyPortokal':
      cappyPortokal += increment;
      break;
    case 'cappyPraskova':
      cappyPraskova += increment;
      break;
    case 'cappyYabulka':
      cappyYabulka += increment;
      break;
    case 'cappyVishna':
      cappyVishna += increment;
      break;
    default:
      break;
  }
  
  // check if any drink quantity is greater than 24 and reset to 0
  if (cocaCola > 24) {
    cocaCola = 0;
  }
  if (colaZero > 24) {
    colaZero = 0;
  }
  if (sprite > 24) {
    sprite = 0;
  }
  if (fanta > 24) {
    fanta = 0;
  }
  if (shweeps > 24) {
    shweeps = 0;
  }
  if (tonic > 24) {
    tonic = 0;
  }
  if (fusteaLemon > 24) {
    fusteaLemon = 0;
  }
  if (fusteaPeach > 24) {
    fusteaPeach = 0;
  }
  if (cappyPortokal > 24) {
    cappyPortokal = 0;
  }
  if (cappyPraskova > 24) {
    cappyPraskova = 0;
  }
  if (cappyYabulka > 24) {
    cappyYabulka = 0;
  }
  if (cappyVishna > 24) {
    cappyVishna = 0;
  }
  
  // update the UI with the new drink quantities
  document.getElementById('cocaCola').innerHTML = cocaCola;
  document.getElementById('colaZero').innerHTML = colaZero;
  document.getElementById('sprite').innerHTML = sprite;
  document.getElementById('fanta').innerHTML = fanta;
  document.getElementById('shweeps').innerHTML = shweeps;
  document.getElementById('tonic').innerHTML = tonic;
  document.getElementById('fusteaLemon').innerHTML = fusteaLemon;
  document.getElementById('fusteaPeach').innerHTML = fusteaPeach;
  document.getElementById('cappyPortokal').innerHTML = cappyPortokal;
  document.getElementById('cappyPraskova').innerHTML = cappyPraskova;
  document.getElementById('cappyYabulka').innerHTML = cappyYabulka;
  document.getElementById('cappyVishna').innerHTML = cappyVishna;
  }
  
  // define function to calculate the total number of drinks
  function calculateTotal() {
    const total = cocaCola + colaZero + sprite + fanta + shweeps + tonic + fusteaLemon + fusteaPeach + cappyPortokal + cappyPraskova + cappyYabulka + cappyVishna;
    const stacks = Math.floor(total / 24);
    const remainder = total % 24;
    let message = `Total drinks: ${total}`;
    if (stacks > 0) {
      message += ` (${stacks} stacks of 24)`;
    }
    if (remainder > 0) {
      message += `, ${remainder} remaining`;
    }
    document.getElementById('total').innerHTML = message;
    
  }
  
  // attach event listeners to plus and minus buttons
  document.querySelectorAll('.plus').forEach(button => {
  button.addEventListener('click', () => {
  const drink = button.dataset.drink;
  updateQuantity(drink, 1);
  });
  });
  
  document.querySelectorAll('.minus').forEach(button => {
  button.addEventListener('click', () => {
  const drink = button.dataset.drink;
  updateQuantity(drink, -1);
  });
  });
  
  // attach event listener to calculate button
  document.getElementById('calculate').addEventListener('click', calculateTotal);