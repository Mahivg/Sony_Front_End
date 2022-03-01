export class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  mDate: Date = new Date();

  constructor(pId: string, pName: string, pDesc: string, pPrice : number, pDate: string) {
    this.id = pId;
    this.name = pName;
    this.description = pDesc;
    this.price = pPrice;
    this.mDate = new Date(pDate);
  }
}
