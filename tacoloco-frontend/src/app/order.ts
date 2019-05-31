export class Order{
    id: number;
    price: number;
    quantity: number;

    constructor(id: number, price:number, quantity: number ){
        this.id=id;
        this.price= price;
        this.quantity=quantity;
    }
}