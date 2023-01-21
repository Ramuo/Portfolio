const nav = document.querySelector('.nav');
const navBtn = document.querySelector("#menuToggle");
const closeBtn = document.querySelector("#close-btn");
const loading = document.getElementById('loading')

// nav sticky nav on scroll
window.addEventListener('scroll',fixNav, false);


function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
}

// show sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
  });
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });

