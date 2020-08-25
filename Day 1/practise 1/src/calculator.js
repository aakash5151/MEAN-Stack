class calculator {


    add(x, y) {

        console.log(x + y);
        // return x + y;
    }
    sub(x, y) {
        console.log(x - y);
    }
    mul(x, y) {
        console.log(x * y);


    }
    div(x, y) {
        console.log(x / y);
    }

    // static main() {
    //     let cal = new calculator();
    //     cal.add(6, 2);
    //     cal.sub(6, 2);
    //     cal.mul(6, 2);
    //     cal.div(6, 2);
    // }


};

// calculator.main();

let cal = new calculator();
cal.add(6, 2);