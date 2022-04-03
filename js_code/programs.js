let buski = document.getElementById("printFib");

function printFib(){
    let x = 0;
    let y = 1;
    let nextNum;
    let arr = [];

    for(let i = 0;i < 10;i++){
        arr.push(x);
        nextNum = x + y;
        x = y;
        y = nextNum;
    }
    buski.innerHTML = arr;
}