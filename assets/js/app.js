const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    const items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
});

prev.addEventListener('click', function(){
    const items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
});

window.addEventListener('keydown', function(e){
    const items = document.querySelectorAll('.item');
    if(e.key === 'ArrowRight') {
        document.querySelector('.slide').appendChild(items[0]);
    } else if(e.key === 'ArrowLeft') {
        document.querySelector('.slide').prepend(items[items.length - 1]);
    }
});
