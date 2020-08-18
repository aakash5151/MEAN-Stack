window.addEventListener("load", () => {

    var demo = document.querySelector("#container");

    let postlist = [

        { "id": 1, "post": "hello" },
        { "id": 2, "post": "Javascript" },
        { "id": 3, "post": "XML" },
        { "id": 4, "post": "Java" },
        { "id": 5, "post": "C++" },
        { "id": 6, "post": "Json" },
        { "id": 7, "post": "DOM" },
        { "id": 8, "post": "HTML" },
        { "id": 9, "post": "AJAX" },


    ];



    for (var i = 0; i <= 10; i++) {

        console.log("I called once");


        var item = postlist[i]
        var test = demo.children[0].cloneNode(true);

        test.style.display = "flex";
        demo.children[0].children[0].innerHTML = item.post + "  " + item.id;
        test.children[0].style.fontSize = "21px";
        test.children[0].style.color = "black"
        demo.insertBefore(test, demo.firstChild);



    }


});