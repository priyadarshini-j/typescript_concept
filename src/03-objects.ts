//interface employee
interface Employee{
    id:number;
    name:string;
    email?:string;
    department:string;
}
let employee1:Employee={
    id:1,
    name:"priya",
    email:"priya@gmail.com",
    department:"cse",
}
let employee2:Employee={
    id:2,
    name:"sara",
    department:"it",
}
console.log(employee1)
console.log(employee2)

//interface manager using extends keyword
interface Manager extends Employee{
    teamSize:number;
}
let manager1:Manager={
    id:3,
    name:"hari",
    department:"iot",
    email:"hari@gmail.com",
    teamSize:10,
}
console.log(manager1)

//print Employee using void 
function printEmployee(e:Employee):void{
    if(e.email){
        console.log(`Employee Name: ${e.name}, Email: ${e.email}, Department: ${e.department}`)
    }
    else{
        console.log("No Email")
    }
}
printEmployee(employee2)


// type product using type keyword and readonly prperty
type Product={
    readonly id:number;
    title:string;
    price:number;
}
let product1:Product={
    id:1,
    title:"toy",
    price:120,
}
// product1.title="car";
console.log(product1)



