function callAjaxUsingJquery() {


    let cityName = "mumbai";
    let url =
        "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
        cityName;
    $.ajax(url).done((data1) => {
        processLogic(data1);
    });

};

let processLogic = (data1) => {
    let parent = document.querySelector("#parent");


    let newEle = parent.children[0].cloneNode(true);
    newEle.innerHTML = data1.name + " " + data1.main.temp_max;
    parent.insertBefore(newEle, parent.firstChild);

}