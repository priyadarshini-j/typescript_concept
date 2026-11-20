//ADD FUNCTION
function add(a: number, b: number): number {
    return a + b;
}
let result = add(10, 20);
console.log("Addition Result:", result);

///optional parameter
function greet(name: string, title?: string): string {
    if (title) {
        return `Hello ${title} ${name}`
    }
        return `Hello ${name}`
    
}
console.log(greet("Hari"))
console.log(greet("priya", "Mr"))

//calculate total using reduce
function calculateTotal(price:number[]):number{
    let result=price.reduce((acc,curr)=>{
        return acc+=curr;
    },0)
    return result;
    
}
console.log(calculateTotal([100,200,300,400,500]))

//logmessage using void 
function logMessage(mes:string):void{
    console.log(mes);
}
logMessage("This is log message");