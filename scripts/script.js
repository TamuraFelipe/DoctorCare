window.addEventListener('scroll', onScroll)
const menu = document.querySelector('nav');
function onScroll(){
    show();
}

function show(){
    if(scrollY > 0){
        menu.classList.add('scroll');
        //console.log(menu);
    } else{
        menu.classList.remove('scroll');
    }
    //console.log(scrollY);
}

function openMobileMenu(){
    document.body.classList.add('mobile-menu-opened')
}
function closeMobileMenu(){
    document.body.classList.remove('mobile-menu-opened')
}

