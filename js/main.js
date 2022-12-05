// ----nav---
const menu = document.querySelector('.nav'),
      burger = document.querySelector('.burger'),
      mobilBack = document.querySelector('.mobile-back'),
      overlay = document.querySelector('.overlay')


const lockScroll = () => {
    document.body.classList.add('lock');
 }  
const unLockScroll = () =>{
    document.body.classList.remove('lock');
 } 
 
const scrollTop = ()  => {
   menu.scrollTo({
      top: 0,
      behavior: "smooth",
   });
 };

burger.addEventListener('click', () => {
    menu.classList.add('open');
    overlay.classList.add('open');
    lockScroll();
    initialMenu();
 });

overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unLockScroll();
    initialMenu();
   
 })
const initialMenu = () => {
   document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
   document.querySelector('.nav__list--dropdown').classList.remove('transformation');
   

   scrollTop();
};        
      
   
   
   
 



menu.addEventListener('click', (e) => {
   if(e.target.classList.contains('nav__link--drop')){
      e.preventDefault();
      e.target.closest('.nav__list').classList.add('transformation');
      e.target.closest('.nav-item').querySelector('.nav__list--dropdown').classList.add('transformation');
      
      console.log(e.target)
      
      scrollTop();
     
   }

   if(e.target.classList.contains('mobile-back__link')){
      e.preventDefault();
      e.target.closest('.nav__list--dropdown').classList.remove('transformation');
      e.target
      .closest('.nav').querySelector('.nav__list').classList.remove('transformation');
      
      
      scrollTop();
     
   }
   if(e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')){
      e.preventDefault();
      menu.classList.remove('open');
      overlay.classList.remove('open');
      unLockScroll();
      scrollTop();
      
   }

})


// ----accordion---

document.querySelectorAll('.questions__accordion-item--trigger').forEach((item) =>
item.addEventListener('click', () =>{
   const parent = item.parentNode;

   if(parent.classList.contains('questions__accordion-item--active')){
      parent.classList.remove('questions__accordion-item--active');
   }else{
      document.querySelectorAll('.questions__accordion-item').forEach((child) => child.classList.remove('questions__accordion-item--active'))
      parent.classList.add('questions__accordion-item--active')
   }
   
})
)



// let btns = document.querySelectorAll('.btn');
// for(btn of btns){
//    btn.addEventListener('click', function(){
//       text = document.querySelector('.text');
     
//       text.classList.toggle('open');
//       if(text.classList.contains('open')){
//       this.textContent = 'close';
//    }else{
//       this.textContent = 'more';
//    }
//    });
   
// }

var swiper = new Swiper('.swiper', {
   // Default parameters
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
   // Responsive breakpoints
   breakpoints: {
     // when window width is >= 320px
     320: {
       slidesPerView: 1,
       spaceBetween: 20
     },
     // when window width is >= 480px
     480: {
       slidesPerView: 2,
       spaceBetween: 40
     },
     // when window width is >= 640px
     1000: {
       slidesPerView: 3,
       spaceBetween: 50
     }
   }
  
 })
 