// var navbar =document.querySelector("#navbar");
// var menu = document.querySelector("#menu");

// window.onscroll=function(){
//     if(window.scrollY>100){
//         navbar.classList.add("sticky");
//     }else{
//       navbar.classList.remove("sticky");
//     }
//   }
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

const carouselItems = document.querySelectorAll(".carousel_item");
let i = 1;

setInterval(() => {
  // Accessing All the carousel Items
  Array.from(carouselItems).forEach((item, index) => {
    if (i < carouselItems.length) {
      item.style.transform = `translateX(-${i * 100}%)`;
    }
  });

  if (i < carouselItems.length) {
    i++;
  } else {
    i = 0;
  }
}, 2000);

