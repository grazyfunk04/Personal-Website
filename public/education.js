const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDown = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (){
    dropDown.classList.toggle('open')
    const isOpen = dropDown.classList.contains('open')

    toggleBtnIcon.classList = isOpen
     ? 'fa-solid fa-xmark'
     : 'fa-solid fa-bars'
}

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000, 
    delay: 200,
});

ScrollReveal().reveal('.education_section', {origin: 'top'});
ScrollReveal().reveal('.first, .second, .third', {origin: 'bottom'});

var icon = document.getElementById("icon");
var NIT_Logo = document.getElementById("NIT_Logo");

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "../resources/moon.png";
        NIT_Logo.src = "../resources/nitlogo2.png";
    }
    else{
        icon.src = "../resources/sun.png";
        NIT_Logo.src = "../resources/nitlogo.png";
    }
}