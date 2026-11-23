//omit the product id from the product interface
interface product{
    id:number;
    title:string;
    price:number;
}
type newProduct=Omit<product,"id">;
const product1:newProduct={
    title:"laptop",
    price:40000,
}
console.log(product1);

//pick the product id and title from the product interface
type productPreview=Pick<product,"id"|"title">;
const product2:productPreview={
    id:1,
    title:"laptop",
}
console.log(product2)

//paratial type utility is used to make all the properties of the product interface optional
type ProductUpdate=Partial<product>;
const product3:ProductUpdate={
    price:30000,
}
console.log(product3);

type priortyCount=Record<"high"|"medium"|"low",number>;
const priority:priortyCount={
    high:10,
    medium:5,
    low:2
}
console.log(priority);