const name = function (nombre) {
    const getArrayChar = function () {
        let arrayChar = [];
        for (let i = 0; i < nombre.length; i++) {
            arrayChar.push(nombre.charAt(i));
        }
        return arrayChar
    }
    return getArrayChar;
};


//UI
function UIShowArray(array, divID, captionMessage) {
    const contenido = document.getElementById('contenido');
    const div = document.createElement('div');
    div.className = 'navbar border';
    div.id = divID;

    const caption = document.createElement('caption');
    caption.className = 'text text-info text-capitalize';
    caption.appendChild(document.createTextNode(captionMessage));
    div.appendChild(caption);

    array.forEach(function (element) {
        const label = document.createElement('label');
        if (element !== ' ') {
            label.className = 'navbar navbar-light bg-light border border-info text-capitalize mt-2';
        } else {
            label.className = 'navbar navbar-light bg-light border border-info text-capitalize mt-4 mb-1';
        }

        label.innerHTML = `
         ${element}
         `;

        div.appendChild(label);
    });
    contenido.appendChild(div);
}

function UIClean(divID) {
    var div = document.getElementById(divID);
    while (div !== null) {
        div.remove();
        div = document.getElementById(divID);
    }
}

function UIgetBreadcrumbNodo(breadcrumb) {
    var nodos = document.querySelectorAll("ul.breadcrumb > li.breadcrumb-item > a");
    for (unNodo of nodos) {
        if (breadcrumb === unNodo.innerText) {
            return unNodo;
        }
    }
}

function UIChangeBreadcrumbColor(breadcrumb) {
    var nodos = document.querySelectorAll("ul.breadcrumb > li.breadcrumb-item > a");
    for (unNodo of nodos) {
        if (breadcrumb !== unNodo.innerText) {
            unNodo.style = "text text-success";
        }
        else {
            unNodo.style.color = "grey";
        }
    }
}


//EVENTOS DEL DOM
var breadcrumbNodo = UIgetBreadcrumbNodo('Fase 1');
var nombre = 'Nuria';
var arrayCharNombre = name(nombre);
breadcrumbNodo.addEventListener("click", function (e) {
    let divID = 'divFase1';
    UIClean(divID);
    divID = 'divFase2';
    UIClean(divID);
    divID = 'divFase3';
    UIClean(divID);
    divID = 'divFase4';
    UIClean(divID);
    let captionMessage = 'Letras de mi nombre';
    UIShowArray(arrayCharNombre(), divID, captionMessage);
    UIChangeBreadcrumbColor('Fase 1');
});

breadcrumbNodo = UIgetBreadcrumbNodo('Lletres Repetides App');
breadcrumbNodo.addEventListener("click", function (e) {
    window.location.reload();
});







