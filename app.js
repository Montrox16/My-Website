const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list .ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list .ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && !header.classList.contains('bg-active'))
        {
            header.classList.add('bg-active');
        } else if(window.scrollY === 0 && header.classList.contains('bg-active'))
            {
                header.classList.remove('bg-active');
            }
});

menu_item.forEach(item=>{
    item.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    })
})