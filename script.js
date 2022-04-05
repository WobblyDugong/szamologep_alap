window.addEventListener("load", init);

function ID (elem){
    return document.getElementById(elem);
}
function $ (elem){
    return document.querySelectorAll(elem);
}
function init(){
    general();

}

function general(){
    var szamok="";
    for (let index = 0; index < 10; index++) {
        szamok += `<button class="szam">${index}</button>`;
    }
    ID("szamok").innerHTML = szamok;

}