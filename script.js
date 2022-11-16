let addSquareButton =  document.getElementById('addSquare'); 
let addTriangleButton = document.getElementById('addTriangle');
let addCircleButton = document.getElementById('addCircle');
let clearButton = document.getElementById('clear');

function addSquare(fruit){
    let icon = '■';
    let div = document.createElement('div');
    div.innerText = icon;
    document.getElementById('fruitBox').appendChild(div);

}

function addTriangle(){
    let icon = '▲';
    let div = document.createElement('div');
    div.innerText = icon;
    document.getElementById('fruitBox').appendChild(div);

}

function addCircle(){
    let icon = '●';
    let div = document.createElement('div');
    div.innerText = icon;
    document.getElementById('fruitBox').appendChild(div);

}



