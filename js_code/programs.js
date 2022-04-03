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

let temp = "red";

function changeCamry(){
    let image_src = document.getElementById("changeCamry");
    let text_src = document.getElementById("lambo_par");

    if(temp == "red"){
        image_src.src="./images/lambo_huracan.jpg";
        text_src.innerHTML = "Turn my Lamborghini Huracán into a Toyota Camry!";
        temp = "green";
    }
    else if(temp == "green"){
        image_src.src = "./images/toyota_camry.jpg";
        text_src.innerHTML = "Turn my Toyota Camry into a Lamborghini Huracán!"
        temp = "red";
    }

    /*if(document.getElementById("changeCamry").src="./images/toyota_camry.jpg"){
    document.getElementById("changeCamry").src="./images/lambo_huracan.jpg";
    }
    else if(document.getElementById("changeCamry").src="./images/lambo_huracan.jpg"){
        document.getElementById("lambo_par").innerHTML = "Turn my Lamborghini Huracán into a Toyota Camry!";
        document.getElementById("changeCamry").src="./images/toyota_camry.jpg";
    }*/
}