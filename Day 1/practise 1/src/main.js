let person = require("./person");
let employee = require("./employee");


class Main {

    static demo() {

        let p = new person();
        let output = p.getName();


        let e = new employee();
        let output1 = e.getemployeeDetail();


        console.log(output + "\n " + output1);

    }

};

Main.demo();