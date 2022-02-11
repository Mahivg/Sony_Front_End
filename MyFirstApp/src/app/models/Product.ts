export class Product {
  id: string;
  name: string;
  description: string;
  price: number;

  constructor(pId: string, pName: string, pDesc: string, pPrice : number) {
    this.id = pId;
    this.name = pName;
    this.description = pDesc;
    this.price = pPrice;
  }
}
