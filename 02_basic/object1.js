const mySym = Symbol("key1");
// mySym variable as Symbol
// Obje literal
const JsUser = {
    "full name" : "Sridhar",
    [mySym] : "mykey1",
}
console.log(JsUser[mySym]);
console.log(mySym);
console.log(JsUser["full name"]);
