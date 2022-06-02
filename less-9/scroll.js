let scrollOne = document.querySelector('header h2');
let scrollTwo = document.querySelector('main');
let scrollThree = document.querySelector('main hr');
let footer = document.querySelector('footer h2');

window.addEventListener('scroll', function(event){
    console.log(window.scrollY);

    if(window.scrollY <= 250){
        scrollOne.style.fontSize = `${30 + window.scrollY / 12}px`;
    }

    if(window.scrollY >= 220 && window.scrollY <= 700){
        scrollThree.style.width = `${260 + (window.scrollY - 220) * 0.35}px`;  
        scrollTwo.style.paddingLeft = `${80 + (window.scrollY - 220) / 2}px`;
        scrollTwo.style.paddingRight = `${80 + (window.scrollY - 220) / 2}px`;
    }

    if(window.scrollY >= 700){
        footer.style.fontSize = `${100 - (window.scrollY - 700) / 10}px`;
    }
})


document.querySelector('header h2').addEventListener('click', () => {
    window.scroll({
        top: 720,
        behavior: 'smooth'
    })
})

document.querySelector('footer h2').addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})
