(()=>{
    // selecting all the Element 
    const headerEl=document.querySelector("header");
    const menuOptionEl=document.querySelector(".menu-option #menu");
    const navEl=document.querySelector("nav ul");
    const preloaderEl=document.querySelector('div.preloader');
    const logoEl=document.querySelector("div.logo");
    const typingEl=document.getElementById("typing");
    // const hoverAnimationEl = document.getElementById("text-hover-effect");
    // const allowedCharacters = ['X', '$', 'Y', '#', '?', '*', '0', '1', '+'];
    // const text = "Santosh Bhandari";
    // function getRandomCharacter() {
    //     const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    //     return allowedCharacters[randomIndex];
    // }
    
    // function animateText() {
    //     const randomizedText = text.split('').map(getRandomCharacter).join('');
    
    //     for (let i = 0; i < text.length; i++) {
    //         setTimeout(() => {
    //             const nextIndex = i + 1;
    //             hoverAnimationEl.innerHTML = `${text.substring(0, nextIndex)}${randomizedText.substring(nextIndex)}`;
    //         }, i * 70);
    //     }
    // }
    // document.addEventListener("DOMContentLoaded", () => {
    //     setTimeout(() => {
    //         animateText();
    //     }, 200); // 2000 milliseconds = 2 seconds
    // });
    // hoverAnimationEl.addEventListener("mouseover", (e) => {
    //     animateText();
    // });
    // typing effect
    var typed = new Typed('#typing', {
        strings: ['Backend Developer', 'Android Developer', 'API Developer', 'Database Designer', 'SOC Analyst'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      });
    //   Scroll Event and Animation
    window.addEventListener("scroll",()=>{
        if(this.scrollY<560){
            headerEl.classList.remove("solidColor");
            logoEl.style.opacity=0;
        }else{
            headerEl.classList.add("solidColor");
            logoEl.style.opacity=1;
        }
    });
    // Menu Option Click Event
    menuOptionEl.addEventListener('click',()=>{
        navEl.classList.toggle('show');
        if(navEl.classList.contains('show')){
            menuOptionEl.classList.remove('bi-list');
            menuOptionEl.classList.add('bi-x-lg');            
        }else{
            menuOptionEl.classList.remove('bi-x-lg');
            menuOptionEl.classList.add('bi-list');
        }
    });
    // Preloader Event Listener
    window.addEventListener("load",()=>{
        preloaderEl.style.display="none";
    })
    AOS.init();
})();