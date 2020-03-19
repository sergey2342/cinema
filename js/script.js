document.addEventListener('DOMContentLoaded', ()=> {
    'use strict';


    // Main slider

    let slides = document.querySelectorAll('#slider .slider-li'),
        currentSlide = 0,
        slideInterval = setInterval(nextSlide, 10000);
    
    function nextSlide() {
        slides[currentSlide].className = 'slider-li';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slider-li showing';
    }

    // Button favorite

    let favorite = document.querySelectorAll('.slider-button__favorites i');   

    for(let i = 0; i < favorite.length; i++){
        favorite[i].addEventListener('click', Favorite);
    }
    
    function Favorite(){
        if(this.classList.contains('favorite')){
            this.classList.add('fa-plus');
            this.classList.remove('fa-check');
            this.classList.remove('favorite');
        } else {
            this.classList.add('fa-check');
            this.classList.remove('fa-plus');
            this.classList.add('favorite');
        }
    }
    




});