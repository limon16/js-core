f1 = document.forms[0];

let container = document.querySelector('.container');
let box = document.querySelector('.box');
let button = document.body.querySelector('input[name="singup"]');



let position;
f1.userPosition.addEventListener('change', function () {
    position = f1.userPosition.value;
})

f1.singup.addEventListener('click', function () {
    let userName = f1.first.value + f1.second.value;
    let userEmail = f1.email.value;
    let userMale = f1.male.value;

    box.style.display = 'none';
    container.style.visibility = 'visible';

    container.querySelector('span:nth-child(2)').textContent = userName
    container.querySelector('span:nth-child(3)').textContent = userEmail
    container.querySelector('span:nth-child(4)').textContent = position

    f1.reset();
})

function singOut() {
    box.style.display = 'flex';
    container.style.visibility = 'hidden';
    button.disabled = true;
}

f1.check.onchange = function () {
    if (button.disabled) {
        button.disabled = false;
        button.style.cursor = 'pointer';
    }
    else button.disabled = true;
}

function changeMale() {
    if (event.target.type == 'radio'){
        if(event.target.value == 'man' || this.event.target.textContent == 'man') document.querySelector('.icon').style.backgroundImage = "url('./img/man.png')";
        else document.querySelector('.icon').style.backgroundImage = "url('./img/woman.png')";
    } 
}
