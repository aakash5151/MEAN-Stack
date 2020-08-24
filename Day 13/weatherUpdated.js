let getweather = () => {

    let cityName = document.querySelector("#text").value;

    let url =
        "https://api.openweathermap.org/data/2.5/weather?appid=7039188347aa16a642ad11f3e64dba5e&units=metric&q=" +
        cityName;


    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {
        let refjson = JSON.parse(xhr.responseText);

        //console.log(refjson);
        processLogic(refjson);
    }
    xhr.send();


};

function processLogic(refjson) {

    ///console.log(refjson.main.temp_max)
    let parent = document.querySelector("#parent");

    let newEle = parent.children[0].cloneNode(true);
    newEle.style.display = "flex";
    newEle.innerHTML = refjson.name + " " + refjson.main.temp_max;

    parent.insertBefore(newEle, parent.firstChild);
    document.querySelector("#text").value = "";
};




