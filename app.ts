let ctorWasInvoked: boolean = false;

class A {
    constructor() {
        console.log("A.ctor");

        ctorWasInvoked = true;
    }
}

class B extends A {
}

if(ctorWasInvoked) {
    console.log("A.ctor was invoked");
}
else {
    console.log("A.ctor was NOT invoked");
}
