let click = 0;
let incClick = 0;
let decClick = 0;

function Decrement(){
    click--;
    decClick++;
    document.getElementById("counter").innerText = click;
    document.getElementById("DecCounter").innerText = decClick;
}
function Increment(){
    click++;
    incClick++;
    document.getElementById("counter").innerText = click;
    document.getElementById("IncCounter").innerText = incClick;
}


