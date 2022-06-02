let form1 = document.forms['list'];
let form2 = document.forms['add'];

form2.button.addEventListener('click', function(){
    if(form2.text.value === '') {
        document.getElementById('modal1').style.display = 'block';
    }
    else {
        addElement();
        form2.text.value = '';
    }
})

function addElement(){
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('name', 'point');
    let newSpan = document.createElement('span');
    newSpan.textContent = form2.text.value;

    let newLable = document.createElement('label');
    newLable.prepend(newInput);
    newLable.append(newSpan);
    list.append(newLable);
}

function clouseModal() {
    event.target.parentElement.parentElement.style.display = 'none';
}

form1.addEventListener('click', function(){
    if(event.target.type === 'checkbox') {
        if(event.target.checked) {
            if(document.getElementsByName('point').length > 1) {
                event.target.parentElement.remove();
            }
            else {
                document.getElementById('modal2').style.display = 'block';
                event.preventDefault();
            }
        }
    }
})


