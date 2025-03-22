const mySym=Symbol("key1")

const jsUser={
    [mySym]:"12545",
    name: 'John',
    age:18,
    location:"shudhowala",
    occupation:"student",
    email:"vahir7215@gmail.com"
}
console.log(jsUser);
console.log(typeof(mySym))


Object.freeze(jsUser)
jsUser.email="vahir3@gmail.com"
console.log(jsUser)