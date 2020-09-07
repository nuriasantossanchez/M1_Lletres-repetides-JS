function getMap(arrayList) {
    let mapList = new Map();

    arrayList.forEach(function (element) {
        element.toUpperCase;
        if (!mapList.has(element) && !isNumber(element)) {
            mapList.set(element, 1);
        } else {
            for (let [key, value] of mapList) {
                if (mapList.has(element)) {
                    mapList.set(element, mapList.get(element) + 1);
                    return;
                }
            }
        }
    });

    return mapList;
}

function isNumber(value) {
    return typeof value === 'number'
}

//UI
function UIShowMap(mapList, divID) {
    const contenido = document.getElementById('contenido');
    const div = document.createElement('div');
    div.className = 'navbar border';
    div.id = divID;

    for (let [key, value] of mapList) {
        const label = document.createElement('label');
        label.className = 'navbar navbar-light bg-light border border-info text-capitalize mt-2';
        label.innerHTML = `
          ${key} 
         `;

        const caption = document.createElement('caption');
        caption.className = 'text text-info text-capitalize';
        if (value === 1) {
            caption.innerHTML = `
                        <br/> <br/>
                        aparece <strong>${value}</strong> vez
                        `;
        } else {
            caption.innerHTML = `
                        <br/> <br/>
                        aparece <strong>${value}</strong> veces
                        `;
        }
        label.appendChild(caption);
        div.appendChild(label)
    }
    contenido.appendChild(div);
}


//EVENTOS DEL DOM
breadcrumbNodo = UIgetBreadcrumbNodo('Fase 3');
breadcrumbNodo.addEventListener("click", function (e) {
    let divID = 'divFase1';
    UIClean(divID);
    divID = 'divFase2';
    UIClean(divID);
    divID = 'divFase3';
    UIClean(divID);
    divID = 'divFase4';
    UIClean(divID);
    UIChangeBreadcrumbColor('Fase 3');
    let mapList = getMap(arrayList);
    UIShowMap(mapList, divID);
});