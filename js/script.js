"use strict";

document.addEventListener('DOMContentLoaded',() => {

   document.querySelector('.header__menu').addEventListener('click',function() {
       document.querySelector('.header__nav').classList.toggle('_active');
       this.classList.toggle('_active');
       document.body.classList.toggle('_noscroll');
   });
   const header = document.querySelector('.header');
   window.addEventListener('scroll',() => {
        if(document.documentElement.scrollTop >1) {   
           header.classList.add('_active');
        }else{
            header.classList.remove('_active');
        }
   });

   const audio = document.querySelector("audio"),
        btns = document.querySelector(".btn");
   document.querySelector('.btn').addEventListener('click',() => {
        btns.classList.add('_actives');
       setTimeout(() => {
        btns.classList.remove('_actives');
       },300);
       audio.play();
   });

   /* scroll Animation */
const animItems = document.querySelectorAll('._beatiful');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++){
            const animItem = animItems[i],
                  animItemHeight = animItem.offsetHeight,
                  animItemOffset = offset(animItem).top,
                  animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_ani');
            } else {
                if(!animItem.classList.contains('_beatiful-no')){
                    animItem.classList.remove('_ani');
                }
                 
                /*анимация будет скролл по снизу и по верху \\animItem.classList.remove('_active');*/
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }
    setTimeout(()=>{
        animOnScroll();
    },700);
    
}

/* scroll Animation------------------------------- */
});
		

       
