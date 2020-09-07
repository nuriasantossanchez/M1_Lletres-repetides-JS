function getArray(nombre) {
    var arrayList = new Array();
    Array.prototype.forEach.call(nombre, function (chr) {

        if (chr.trim() !== '') {
            if (!isNaN(chr)) {
                arrayList.push(Number.parseInt(chr));
            }
            else {
                arrayList.push(chr);
            }
        }
    });

    return arrayList;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//UI
function UIShowVocalConsonante(array, divID) {
    const contenido = document.getElementById('contenido');
    const div = document.createElement('div');
    div.className = 'navbar border';
    div.id = divID;

    array.forEach(function (element) {
        const label = document.createElement('label');
        label.className = 'navbar navbar-light bg-light border border-info text-capitalize mt-2';

        const caption = document.createElement('caption');
        caption.className = 'text text-info text-capitalize';

        UIVocalConsonante(element, label, caption);

        div.appendChild(label);

    });
    contenido.appendChild(div);
}

function UIVocalConsonante(element, label, caption) {
    if (typeof element !== 'number') {
        switch (element.toUpperCase()) {
            case 'A':
                label.innerHTML = `
                        ${element} 
                        `;
                caption.innerHTML = `
                        <br/> <br/>
                            vocal
                        `;
                label.appendChild(caption);

                break;
            case 'E':
                label.innerHTML = `
                        ${element}
                        `;
                caption.innerHTML = `
                        <br/> <br/>
                            vocal
                        `;
                label.appendChild(caption);
                break;
            case 'I':
                label.innerHTML = `
                        ${element}
                        `;
                caption.innerHTML = `
                        <br/> <br/>
                            vocal
                        `;
                label.appendChild(caption);
                break;
            case 'O':
                label.innerHTML = `
                        ${element}
                        `;
                caption.innerHTML = `
                        <br/> <br/>
                            vocal
                        `;
                label.appendChild(caption);
                break;
            case 'U':
                label.innerHTML = `
                        ${element}
                        `;
                caption.innerHTML = `
                        <br/> <br/>
                            vocal
                        `;
                label.appendChild(caption);
                break;
            default:
                label.innerHTML = `
                        ${element}
                        `;
                caption.innerHTML = `
                        <br/> <br/>
                            consonante
                        `;
                label.appendChild(caption);
                break;
        }
    }
    else {
        label.innerHTML = `
                ${element}
                `;
        caption.innerHTML = `
                <br/> <br/>
                los nombres de personas
                <br/> 
                no contienen números!
                `;
        label.appendChild(caption);
    }
}


//EVENTOS DEL DOM
breadcrumbNodo = UIgetBreadcrumbNodo('Fase 2');
var arrayList = getArray('N ur ia iii12 30N');
breadcrumbNodo.addEventListener("click", function (e) {
    let divID = 'divFase1';
    UIClean(divID);
    divID = 'divFase2';
    UIClean(divID);
    divID = 'divFase3';
    UIClean(divID);
    divID = 'divFase4';
    UIClean(divID);
    UIChangeBreadcrumbColor('Fase 2');
    arrayList.push(getRandomInt(0, 100));
    UIShowVocalConsonante(arrayList, divID);
});


