let box = document.querySelector('.box');
let body = document.querySelector('body');

document.getElementById('color').addEventListener('click', function(c){
    document.querySelector('.box-smal:nth-child(2)').style.backgroundColor = "#30a79a";
    document.querySelector('.box-smal:nth-child(1)').style.backgroundColor = "#801000";
    document.querySelector('.box-smal:nth-child(3)').style.backgroundColor = "#45ca76";
    document.querySelector('.box-smal:nth-child(4)').style.backgroundColor = "#58e900";
    document.querySelector('.box-smal:nth-child(5)').style.backgroundColor = "#88888b";
    document.querySelector('.box-smal:nth-child(6)').style.backgroundColor = "#f82400";
    document.querySelector('.box-smal:nth-child(7)').style.backgroundColor = "#1a23ff";
    document.querySelector('.box-smal:nth-child(8)').style.backgroundColor = "#841888";
    document.querySelector('.box-smal:nth-child(9)').style.backgroundColor = "#878700";

    box.style.visibility="visible";
    box.addEventListener('click', function(){
        let color = getComputedStyle(event.target);
        body.style.backgroundColor = color.backgroundColor;
    } )
})

document.getElementById('image').addEventListener('click', function(i){
    document.querySelector('.box-smal:nth-child(1)').style.backgroundImage = "url('https://i.stack.imgur.com/SvWWN.png')";
    document.querySelector('.box-smal:nth-child(2)').style.backgroundImage = `url(https://cdn.wallpapersafari.com/3/89/53j19Z.jpg)`;
    document.querySelector('.box-smal:nth-child(3)').style.backgroundImage = `url(https://i.stack.imgur.com/p9mUO.jpg)`;
    document.querySelector('.box-smal:nth-child(4)').style.backgroundImage = `url(https://res.cloudinary.com/practicaldev/image/fetch/s--BuPz-p40--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nphrgz8yfnjylrwfr0yl.png)`;
    document.querySelector('.box-smal:nth-child(5)').style.backgroundImage = `url(https://devbeep.com/wp-content/uploads/2021/08/fff.png)`;
    document.querySelector('.box-smal:nth-child(6)').style.backgroundImage = `url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg)`;
    document.querySelector('.box-smal:nth-child(7)').style.backgroundImage = `url(https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg)`;
    document.querySelector('.box-smal:nth-child(8)').style.backgroundImage = `url(https://miro.medium.com/max/1400/1*S8UogculWFLr3lVdLn05MA.jpeg)`;
    document.querySelector('.box-smal:nth-child(9)').style.backgroundImage = `url(https://i.stack.imgur.com/NEuip.jpg)`;

    box.style.visibility="visible";
    box.addEventListener('click', function(){
        let color = getComputedStyle(event.target);
        body.style.backgroundImage = color.backgroundImage;
    } )
})
