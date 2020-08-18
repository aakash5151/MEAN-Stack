window.addEventListener("load", () => {

    var demo = document.querySelector("#container");

    for (var i = 1; i <= 10; i++) {

        console.log("I called once");

        var test = demo.children[0].cloneNode(true);
        test.style.display = "flex";
        demo.children[0].children[0].innerHTML = "HELLO  " + i;
        test.children[0].style.fontSize = "21px";
        test.children[0].style.color = "white"
        demo.insertBefore(test, demo.firstChild);



    }


})