// Typescript setup and Everyday Type

/*Specifying Types*/
//string boolean  number regex array object

// In typescript you have to specify the type of the variable
//string
let userName : string ="khodijah";
//boolean
let hasLoggedIn: boolean = true;
userName += "Lawal";
console.log(userName)
//number
let myNumber:number = 6
//regex
let myRegex: RegExp =/foo/
//array
const names: string[] = userName.split(" ");
const numbers: Array<number> =["a"] // Type string is not assignable to the Type number
const number: Array<number> =[2, 3, 4]
//object
const myPersons :{
    firstname: string;
    lastname: string;
} = {
   firstname:"Khodijah",
   lastname: "Lawal"
}
//Defining it once in a reuser way

interface Person{
   first: string;
    last: string;
  
}
const myPerson:Person ={
   first:"Khodijah",
   last: "Lawal"
}

//using object as maps
const ids:{
    30 ="a";
    40 ="b";

}
ids[50] ="c" // there is an error because it is a string but added number to it

const id: Record<number, string> { // utility state i.e specify the type
    20 ="a";
    60 ="b";
}
id[50] = "c";
// conditional statement

if(id[50] === "D"){

}
for(let i = 0; i < 10; i++){
    console.log(i)
}
[1, 2, 3] .forEach((v) => console.log(v)){
    const out = [4, 5, 6].map((v) => `${v * 1}`)
}

[1, 2, 3] .forEach((v) => console.log(v)){
    const out : number = [4, 5, 6].map((v) => v * 1)
}