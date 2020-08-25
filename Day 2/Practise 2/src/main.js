let list = require("./module");
let http = require("http");

//console.log(list);
//console.log(list[0].city);


http.createServer((req, res) => {


    let data = JSON.stringify(list)
    res.end(data);
    // console.log(data);


}).listen(8800);

function callAjax() {
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {


        let demo = xhr.responseText;
        let data = JSON.parse(demo);
        console.log(data);

        processLogic(data);

    };

    xhr.open("GET", "http://localhost:8800/");

    xhr.send();
};


function processLogic(data) {

    document.querySelector("#demo").innerHTML = data[0];
}




