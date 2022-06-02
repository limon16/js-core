const getS = selector => document.querySelector(selector);

//відображення редактора першого блоку та взаємодія з ним
getS('.btn-edit').onclick = function () {
    getS('.style-block').classList.toggle('hide', true);
    if (getS('.edit-block').classList.contains('hide')) {
        getS('.edit-block').classList.remove('hide');
        getS('.edit-area').value = getS('.box-top').innerHTML;
    }
    else {
        getS('.edit-block').classList.add('hide');
    }
}

getS('.btn-save').onclick = function () {
    getS('.box-top').innerHTML = getS('.edit-area').value;
    getS('.edit-block').classList.add('hide');
}


//відображення меню стилізації
getS('.btn-style').onclick = function () {
    getS('.edit-block').classList.toggle('hide', true);

    if (getS('.style-block').classList.contains('hide')) getS('.style-block').classList.remove('hide');
    else getS('.style-block').classList.add('hide');
}

//функція для зміни розміру тексту
document.querySelector('.form-size').onclick = function () {
    getS('.box-top').style.fontSize = event.target.value;
}
//функція для зміни шрифту
document.getElementById('fontFamily').onchange = function () {
    getS('.box-top').style.fontFamily = this.value;
}

//функція вибору кольору для тексту та фону
let colors = ['#dc4b49', '#007df6', '#219748', '#313b40', '#e1ae09', '#db5386', '#cecece', '#6548a6', '#08819d'];

for (let i = 0; i < getS('.box-color').children.length; i++) {
    getS('.box-color').children[i].style.backgroundColor = colors[i]

    getS('.btn-color-bg').addEventListener('click', () => {
        getS('.box-color').classList.toggle('hide');

        getS('.box-color').children[i].onclick = function () {
            getS('.box-top').style.backgroundColor = this.style.backgroundColor;
            getS('.box-color').classList.add('hide');
        }
    })

    getS('.btn-color-text').addEventListener('click', () => {
        getS('.box-color').classList.toggle('hide');

        getS('.box-color').children[i].onclick = function () {
            getS('.box-top').style.color = this.style.backgroundColor;
            getS('.box-color').classList.add('hide');
        }
    })
}

//функція щоб текст був жирний/нормальний
getS('input[name="bold"]').onclick = function () {
    event.target.checked ?
        getS('.box-top').style.fontWeight = 'bold' :
        getS('.box-top').style.fontWeight = 'normal';
}

//функція щоб текст був курсивний
getS('input[name="italic"]').onclick = function () {
    event.target.checked ?
        getS('.box-top').style.fontStyle = 'italic' :
        getS('.box-top').style.fontStyle = 'normal';
}

//приховання попердніх блокові та відораження редактору для створення таблиці/списку
getS('.btn-add').addEventListener('click', () => {
    getS('.box-top').classList.add('hide');
    getS('.box-middle').classList.add('hide');
    getS('.box-bottom').classList.add('hide');
    getS('.table-list').classList.remove('hide');
})

//конструктор таблиці
const table = document.forms['table-create'];

getS('.btn-create-table').addEventListener('click', () => {
    getS('.table-list').classList.add('hide');
    getS('.box-top').classList.remove('hide');
    getS('.box-middle').classList.remove('hide');
    getS('.box-bottom').classList.remove('hide');

    const countTR = table[0].value;
    const countTD = table[1].value;
    const widthTD = table[2].value;
    const heightTD = table[3].value;
    const borderWidth = table[4].value;
    const borderType = table.typeBorder.value;
    const borderColor = table.colorBorder.value;

    getS('.edit-area').value += `<table>\n`;

    for (let i = 0; i < countTR; i++) {
        getS('.edit-area').value += `<tr style="text-align:center";>`;

        for (let j = 0; j < countTD; j++) {
            getS('.edit-area').value += `<td style="width: ${widthTD}px; height: ${heightTD}px; border: ${borderWidth}px ${borderType} ${borderColor}">TD</td>\n`;
        }
        getS('.edit-area').value += `</tr>\n`;
    }

    getS('.edit-area').value += `</table>\n`;

})

//відображання конструктора для списку чи таблиці
const tableCreate = getS('.form-create input[name="table"]');
const listCreate = getS('.form-create input[name="list"]');

getS('.form-create').onclick = function () {
    if(event.target.value == 'table'){
        listCreate.checked = false;
        getS('.table-create').classList.toggle('hide');
        if (!getS('.create-list').classList.contains('hide')) getS('.create-list').classList.add('hide');

    }

    if(event.target.value == 'list'){
        tableCreate.checked = false;
        getS('.create-list').classList.toggle('hide');
        if (!getS('.table-create').classList.contains('hide')) getS('.table-create').classList.add('hide');
    }
}


//конструктор списку
const list = document.forms['list-create'];
getS('.btn-create-list').addEventListener('click', () => {
    getS('.table-list').classList.add('hide');
    getS('.box-top').classList.remove('hide');
    getS('.box-middle').classList.remove('hide');
    getS('.box-bottom').classList.remove('hide');

    const countLi = list[0].value;
    const typeList = list[1].value;

    getS('.edit-area').value += `<ul>\n`;

    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li style="list-style-type:${typeList}";>item 1</li>`;
    }

    getS('.edit-area').value += `</ul>\n`;

})
