const http = require('http');


http.createServer((req, res) => {


    let myjson = {

        id: 1,
        name: "Aakash",
        college: "Cdac",

    };

    res.end(JSON.stringify(myjson));

}).listen(5600);



