let form = document.querySelector(".hero__form");
let input = document.querySelector(".hero__input");
let resetBtn = document.querySelector(".hero__second-btn");
let foot = document.querySelector(".hero__text-foot");
let bike = document.querySelector(".hero__text-bike");
let car = document.querySelector(".hero__text-car");
let plane = document.querySelector(".hero__text-plane");
let footSpeed = 2.5;
let bikeSpeed = 20;
let carSpeed = 90;
let planeSpeed = 800;
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  function calculatorSpeed(distance, speed) {
    let hour = Math.floor(distance / speed);
    let minutes = Math.floor((distance / speed - hour)*60);
    let seconds = Math.floor(((distance / speed - hour)*60-minutes)*60);
    let miliseconds = Math.floor((((distance / speed - hour)*60-minutes)*60-seconds)*60);
    return `${hour}h /${minutes}m /${seconds}sec /${miliseconds}ms`
  }
  foot.textContent = calculatorSpeed(input.value, footSpeed)
  bike.textContent = calculatorSpeed(input.value, bikeSpeed)
  car.textContent = calculatorSpeed(input.value, carSpeed)
  plane.textContent = calculatorSpeed(input.value, planeSpeed)
});
resetBtn.addEventListener("click", ()=>{
    document.location.reload()
})