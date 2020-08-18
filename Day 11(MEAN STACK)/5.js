window.addEventListener("load", () => {
    processLogic();

    // step 1
    let xhr = new XMLHttpRequest();
    const url = "https://reqres.in/api/users?page=2";

    console.log(url)
    // step 2 
    xhr.open("GET", url);

    // step 3 
    xhr.onreadystatechange = () => {

        console.log(xhr.readyState);

        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
        }

    }
    // step 4
    xhr.send();

});


let processLogic = function () {
    var demo = document.querySelector("#container");

    let postlist = [

        { post: "Data Structure" },
        { post: "Javascript" },
        { post: "XML" },
        { post: "Java" },
        { post: "C++" },
        { post: "Json" },
        { post: "DOM" },
        { post: "HTML" },
        { post: "AJAX" },
        { post: "Jquery" }


    ];



    for (var i = 1; i < postlist.length; i++) {

        console.log("I called once");

        //console.log(postlist[i])
        var item = postlist[i]
        var test = demo.children[0].cloneNode(true);

        test.style.display = "flex";
        test.children[0].innerHTML = item.post;
        test.children[0].style.fontSize = "21px";
        test.children[0].style.color = "white";
        demo.insertBefore(test, demo.firstChild);



    }
};