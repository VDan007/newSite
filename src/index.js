const menuContent = document.getElementById('menuContent');
const menuBtn = document.getElementById('menuBtn');
const menuCLoseBtn = document.getElementById('menuCloseBtn');


let isMenuOpen = false;
menuBtn.addEventListener('click',toggleMenu);
menuCLoseBtn.addEventListener('click',toggleMenu);


function makeVisible(){
    menuContent.classList.add('flex');
    menuContent.classList.remove('hidden');
}

function hide(){
    menuContent.classList.add('hidden');
    menuContent.classList.remove('flex');
}


function toggleMenu(){
    isMenuOpen = !isMenuOpen;
    isMenuOpen ? makeVisible() : hide(); 
}

