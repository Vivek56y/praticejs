// const mySym=Symbol("key1")
// object literals
const jsUser={
    // [mySym]:"12545",
    name: 'John',
"full name":"VIVEKYADAV",
    age:18,
    location:"shudhowala",
    occupation:"student",
    email:"vahir7215@gmail.com"
}
// console.log(jsUser["full name"]);
// console.log(typeof(mySym))


// Object.freeze(jsUser)
// jsUser.email="vahir3@gmail.com"
// console.log(jsUser)
jsUser.age=function(){

    console.log("myage is 23");
}
jsUser.add=function(){

    console.log(`my age `);
}
console.log(jsUser.age())