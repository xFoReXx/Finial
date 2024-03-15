const icon = document.querySelector('.nav-icon');
const textP = document.querySelector('.text-p');
const textDiv = document.querySelector('.text');
const header = document.querySelector('header');

textDiv.classList.add('hidden');

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
