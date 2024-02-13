(()=>{
    // selecting all the Element 
    const headerEl=document.querySelector("header");
    const menuOptionEl=document.querySelector(".menu-option #menu");
    const navEl=document.querySelector("nav ul");
    const preloaderEl=document.querySelector('div.preloader');
    const logoEl=document.querySelector("div.logo");
    console.log(menuOptionEl)
    window.addEventListener("scroll",()=>{
        console.log(this.scrollY);
        if(this.scrollY<560){
            headerEl.classList.remove("solidColor");
            logoEl.style.opacity=0;
        }else{
            headerEl.classList.add("solidColor");
            logoEl.style.opacity=1;
        }
    });
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
    window.addEventListener("load",()=>{
        preloaderEl.style.display="none";
    })
    AOS.init();
})();