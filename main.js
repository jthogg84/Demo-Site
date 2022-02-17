/* Mobile Nav Menu Open And Close*/
let menuBtn = document.querySelector('.menu');
let menuBtn2 = document.querySelector('.menu2');
let sideNav = document.querySelector('.side-menu');
let body =document.querySelector('body');

menuBtn.addEventListener('click' , ()=> {
    sideNav.classList.toggle('js-show') 
    sideNav.classList.toggle('js-hide') 
    body.classList.toggle('scrollOff')
})

menuBtn2.addEventListener('click' , ()=> {
    sideNav.classList.toggle('js-hide') 
    sideNav.classList.toggle('js-show') 
    body.classList.toggle('scrollOff')
})
/*************************************************************************************/

/*Image Gallery */

/*************************************************************************************/


/*Fade on Scoll*/

/*************************************************************************************/