function callAjax() {

    let xhr = new XMLHttpRequest();

    xhr.onload = () => {

        // console.log(xhr.responseText);
        const newjson = JSON.parse(xhr.responseText);
        /// console.log(newjson);
        processLogic(newjson);

    }

    xhr.open("GET", "https://reqres.in/api/users?page=2");

    xhr.send();
};

function processLogic(newjson) {


    const item = document.querySelector("#parent");
    for (let i = 0; i < newjson.data.length; i++) {

        let newitem = newjson.data[i]
        let newEle = item.children[0].cloneNode(true);
        newEle.innerHTML = newitem.first_name + " " + newitem.last_name;
        newEle.style.margin = "2px";
        item.insertBefore(newEle, item.firstChild);

    }




}