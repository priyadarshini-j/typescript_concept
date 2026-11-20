function getFirst<T>(items:T[]):T|undefined{
    return items[0];
    
}
console.log(getFirst([1,2,3,4,5]));
console.log(getFirst(["a","b","c"]));
console.log(getFirst([]));

interface ApiResponse<T>{
    data:T;
    status:number;
    message:string;
}
interface user{
    id:number;
    name:string;
}
let response:ApiResponse<user>={
    data:{
        id:1,
        name:"priya"
    },
    status:200,
    message:"success"
}
console.log(response)

interface Product{
    id:number;
    name:string;
    price:number;
}
let productResponse:ApiResponse<Product>={
    data:{
        id:1,
        name:"laptop",
        price:1000
    },
    status:200,
    message:"success"
}
console.log(productResponse)