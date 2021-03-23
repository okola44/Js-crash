var name="Okola";
console.log(name);
var secondName=name;
console.log(secondName);
name="Imali";
console.log(secondName);
console.log(name);
var person={
    name:"Imali",
    age:25,
    hobbies:["cookong","cleaning","watching"],
    height:"120cm",
};
console.log(person.name);
person.hobbies.push("cleaning");
console.log(person.hobbies);
//var secondperson =person
var secondPerson=Object.assign({},person);
console.log(secondPerson);
var myhobbies=person.hobbies.slice();
console.log(myhobbies);
//hoisting
var say="hello";
function statement(){
}
statement();
console.log(say);
//local scope
function alert(){
    var talk="sense";
    console.log(talk);
}
alert();
