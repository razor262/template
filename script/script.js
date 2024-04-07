console.log('work'); 

/* ---------------------------- */
/* burger menu */ 
/* ---------------------------- */
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let body = document.querySelector('.body');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('active-body');
}); 

/* ---------------------------- */
/* spoiler */
/* ---------------------------- */

"use strict"; 
