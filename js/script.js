const icon = document.querySelector('.nav-icon')
const textP = document.querySelector('.text-p')
const textDiv = document.querySelector('.text')
const header = document.querySelector('header')
const moreScansButton = document.getElementById('moreBtn')
const sideMenu = document.getElementById('side-menu')
const closeMenuButton = document.getElementById('close-menu-btn')

closeMenuButton.addEventListener('click', function () {
	sideMenu.classList.add('hidden')
})

moreScansButton.addEventListener('click', function () {
	sideMenu.classList.toggle('visible')
	sideMenu.classList.toggle('hidden')
})

icon.addEventListener('click', function(event) {
    textDiv.classList.toggle('hidden');
    event.stopPropagation();
});

textP.addEventListener('click', function(event) {
    textDiv.classList.toggle('hidden');
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    if (!header.contains(event.target)) { 
        textDiv.classList.add('hidden');
    }
});
