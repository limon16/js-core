window.addEventListener('keydown', function (){
    // if(event.code == 'Tab'){
    //     document.querySelector(`textarea`).value += '\t';
    //     console.log(event);
    // }

    if (event.key == 'Tab') {
        event.preventDefault();
        let start = event.target.selectionStart;
        let end = event.target.selectionEnd;
        event.target.value = event.target.value.substring(0, start) + '\t' + event.target.value.substring(end);
        event.target.selectionStart = event.target.selectionEnd = start + 1;
    }

    if(event.code !== 'CapsLock'){
        document.querySelector(`#${event.code}`).classList.add('active');
    }
    else {
        document.querySelector('#CapsLock').classList.add('active');
        document.querySelector('span').classList.add('active-caps');
    }

    this.addEventListener('keyup', function () {
        if (event.code !== 'CapsLock') document.querySelector(`#${event.code}`).classList.remove('active');
        else {
            document.querySelector('#CapsLock').classList.remove('active');
            document.querySelector('span').classList.remove('active-caps');
        }
    });
});
