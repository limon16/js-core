let f1 = document.forms[0];


f1.move.addEventListener('click', function () {
    let userText = f1.text.value;

    if (userText.trim() !== '') {
        f1.textTwo.value = userText;
    }

    f1.text.value = '';
})

let f2 = document.forms[1];
f2.textblur.addEventListener('blur', function () {
    let userText = f2.textblur.value;

    f2.textblur.placeholder = userText;
    f2.textblur.value = '';
})