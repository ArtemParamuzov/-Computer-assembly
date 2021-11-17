function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
;

let countDownDate = new Date("jan 1, 2022 00:00:00").getTime();

let countDownFunction = setInterval(function () {
   let now = new Date().getTime();
   let distance = countDownDate - now;
   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
   let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
   let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
   let seconds = Math.floor(distance % (1000 * 60) / 1000);
   document.getElementById('d').innerText = days;
   document.getElementById('h').innerText = hours;
   document.getElementById('m').innerText = minutes;
   document.getElementById('s').innerText = seconds;
   if (distance < 0 ){
      clearInterval(countDownFunction);
      document.getElementById('d').innerText = '0';
      document.getElementById('h').innerText = '0';
      document.getElementById('m').innerText = '0';
      document.getElementById('s').innerText = '0';
   }
})

const burger = document.querySelector('.navbar__burger');
const navbar = document.querySelector('.header__navbar');
if(burger){
   const navbarBody = document.querySelector('.navbar__menu');
   burger.addEventListener('click', function (){
      navbar.classList.toggle('_active');
      document.body.classList.toggle('_lock');
      burger.classList.toggle('_active');
      navbarBody.classList.toggle('_active');
   });
}