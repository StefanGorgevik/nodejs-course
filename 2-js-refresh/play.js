// const name = "Stefan";
// let age = 25;
// const hasHobbies = true;

// age = 26;
// function summarizeUser(userName, userAge, userHasHobby) {
//     var statement = `Name is ${userName}, age is ${userAge}, and the user has hobbies: ${userHasHobby}`;
//     return statement;
// }

// console.log(summarizeUser(name, age, hasHobbies));

// const summarizeUserArrow = (userName, userAge, userHasHobby) => {
//     return `Name is ${userName}, age is ${userAge}, and the user has hobbies: ${userHasHobby}`
// }

// console.log(summarizeUserArrow(name, age, hasHobbies));

// const add = (a, b) => a + b;
// console.log(add(1,2));
// const addOne = a => a + 1;
// console.log(addOne(1));
// const addRandom = () => 1 + 2;
// console.log(addRandom());

// //objects
// const person = {
//     name: "Stefan",
//     age: 25,
//     greet() {
//         console.log("Hi, I am " + this.name + "!");
//     }
// };

// console.log(person);
// person.greet();

//arrays

// const hobbies = ["Sports", "Cooking", 22];
// // for(let hobby of hobbies) {
// //     console.log(hobby);
// // }

// // console.log(hobbies);
// // var newHobbies = hobbies.map(hobby => "Hobby: " + hobby);
// // console.log(newHobbies);

// hobbies.push("Programming");
// console.log(hobbies);

// const copiedArray = hobbies.slice();
// console.log(copiedArray);

// const copyArray = [...hobbies]; //without ... it will be a nested array
// console.log(copyArray);

// const person = {
//     name: "Stefan",
//     age: 25,
//     greet() {
//         console.log("Hi, I am " + this.name + "!");
//     }
// };

// const copiedPerson = {...person};
// console.log(copiedPerson);

// const toArray = (a, b, c) => {
//     return [a, b, c];
// };

// console.log(toArray(1,2,3)); //you can't add a fourth
// console.log(toArray(1,2,3,4));

// const toArray2 = (...args) => {  //can accept any number of arguments
//     return args;
// };

// console.log(toArray2(1,2,3,4));

const person = {
    name: "Stefan",
    age: 25,
    greet() {
        console.log("Hi, I am " + this.name + "!");
    }
};

// const printName = (person) => {
//     console.log(person.name);
// }

// printName(person);

// const printName2 = ({ name, age }) => {
//     console.log(name);
//     console.log(age);
// }
// printName2(person);

// const {name, age} = person;
// console.log(name, age);

// const hobbies = ["Sports", "Cooking"];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// const fetchData = callback => {
//     setTimeout(() => {
//         callback("Done!");
//     },1500)
// }

// setTimeout(() => {
//     console.log("Timer is done!");  //asynchronous code - it will be recognized, but it will move on to sync code
//     fetchData((text) => {
//         console.log(text);
//     })
// }, 1);

// console.log("Hello"); //synchronous code
// console.log("Hi!");   //synchronous code - they will run first

const fetchData = (callback) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        },1500)
    }); 
    return promise;
}

setTimeout(() => {
    console.log("Timer is done!");  //asynchronous code - it will be recognized, but it will move on to sync code
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2=> {
        console.log(text2);
    })
}, 1);

console.log("Hello"); //synchronous code
console.log("Hi!");   //synchronous code - they will run first
