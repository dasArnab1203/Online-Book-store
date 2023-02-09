searchForm = document.querySelector('.search_form');
document.querySelector('#search_btn').onclick = () => {
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login_form');
document.querySelector('#login_btn').onclick = () => {
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login').onclick = () => {
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');
  
  if(window.scrollY > 80){
    document.querySelector('.header .header2').classList.add('active');
  }else{
    document.querySelector('.header .header2').classList.remove('active');
  }
  
}

window.onload = () =>{
  
  if(window.scrollY > 80){
    document.querySelector('.header .header2').classList.add('active');
  }else{
    document.querySelector('.header .header2').classList.remove('active');
  }

  fadeOut();
}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".book-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1024: {
      slidesPerView: 3,
      
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween:10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    450: {
      slidesPerView: 2,
      
    },
    768: {
      slidesPerView: 3,
      
    },
    1024: {
      slidesPerView: 4,
      
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween:10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1024: {
      slidesPerView: 3,
      
    },
  },
});

var swiper = new Swiper(".review-slider", {
  spaceBetween:10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1024: {
      slidesPerView: 3,
      
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween:10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1024: {
      slidesPerView: 3,
      
    },
  },
});