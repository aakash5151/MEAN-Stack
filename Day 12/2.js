function callajax() {

    let xhr = new XMLHttpRequest();

    xhr.onload = () => {

        // console.log(xhr.responseText);
        let refjson = JSON.parse(xhr.responseText);
        jsonhandler(refjson);

    }
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.send();


};

let jsonhandler = (jsondoc) => {
    console.log(jsondoc);
    let parent = document.querySelector("#parent");

    for (let i = 0; i < jsondoc.length; i++) {
        let element = parent.children[0].cloneNode(true);

        element.innerHTML = jsondoc[i].FirstName;

        parent.insertBefore(element, parent.firstChild);

    }






}


// XML Handler
function callxml() {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () => {
        // console.log(xhr.responseXML);
        const xmldoc = xhr.responseXML;

        xmlhandler(xmldoc);
    };

    xhr.send();


};

function xmlhandler(xmldoc) {

    let authorList = xmldoc.querySelectorAll("Author");

    for (let i = 0; i < authorList.length; i++) {
        let authorItem = authorList[i];

        let parent = document.querySelector("#parent");
        let newEle = parent.children[0].cloneNode(true);
        newEle.innerHTML = authorItem.children[0].innerHTML;
        parent.insertBefore(newEle, parent.firstChild);



    }

}