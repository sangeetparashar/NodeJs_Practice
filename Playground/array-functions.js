var square = (x) => x * x;

console.log(square(5));

var user = {
    name: "Sangeet",
    sayhi: () => {
        console.log(`Hello`);
    },
    sayHiAlt () {
        console.log(`Hello. I'm ${this.name}`);
    }
};
user.sayHiAlt();

//one caveat is that arrow functions can't be used to bind the this property (aka the parents or the global variables)
//it has an alternative function however - checkout the sayhiAlt function
//it also doesn't read the arguments array - so we can simply use the regular functions