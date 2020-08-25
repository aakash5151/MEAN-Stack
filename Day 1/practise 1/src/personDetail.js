class Person {


    constructor() {

        console.log("I am a constructor");

    }


    getPersonAddress() {

        return "mumbai";
    }

    getPersonName() {

        return "Aakash_Jaiswal";
    }

    // getPersonDetail() {

    //     const name = this.getPersonName();
    //     const address = this.getPersonAddress();
    //     return name + "\n" + address;
    // }

    static demo() {

        const p = new Person();
        //const detail = p.getPersonDetail();
        // console.log(detail);
        const name = p.getPersonName();
        const address = p.getPersonAddress();
        console.log(name + "\n" + address);
    }

};


Person.demo();