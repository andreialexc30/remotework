// Select HTML elements
const menuBtn = document.getElementById('mobile-menu_trigger');
const closeMenuBtn = document.getElementById('mobile-menu_close');
const menuList = document.querySelector('.mobile-nav-list');
const dropdowns = document.querySelectorAll('.dropdown-trigger');
const dropdownsList = document.querySelectorAll('.dropdown_list');

// JS Events for DOM manipulation
menuBtn.addEventListener('click', () => {
    expandMenu('active')
    menuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'initial'
})

closeMenuBtn.addEventListener('click', () => {
    expandMenu('active')
    menuBtn.style.display = 'initial';
    closeMenuBtn.style.display = 'none';
})

dropdowns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target)
        let target = e.target.nextElementSibling;
        target.classList.toggle('active')
    })
})

// Close dropdown upon clicking outside
window.onclick = function(e) {
    console.log(e.target)
    if(!e.target.matches('.dropdown-trigger') && !e.target.parentElement.matches('.dropdown_list') && !e.target.matches('.dropdown_list')) {
        dropdownsList.forEach((dropdown) => {
            dropdown.classList.remove('active')
        })
    }
}

function expandMenu(status) {
    if(menuList.classList.contains(status)) {
        menuList.classList.remove(status)
    } else {
        menuList.classList.add(status)
    }
}
