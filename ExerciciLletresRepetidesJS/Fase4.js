function getArrayFullName(surname) {
    let arraySurname = getArray(surname);
    let fullName = (arrayCharNombre()).concat(' ').concat(arraySurname);
    return fullName;
}


//EVENTOS DEL DOM
breadcrumbNodo = UIgetBreadcrumbNodo('Fase 4');
breadcrumbNodo.addEventListener("click", function (e) {
    let divID = 'divFase1';
    UIClean(divID);
    divID = 'divFase2';
    UIClean(divID);
    divID = 'divFase3';
    UIClean(divID);
    divID = 'divFase4';
    UIClean(divID);
    UIChangeBreadcrumbColor('Fase 4');
    let surname = 'Santos';
    let fullName = getArrayFullName(surname);
    let captionMessage = 'Nombre completo';
    UIShowArray(fullName, divID, captionMessage);
});


