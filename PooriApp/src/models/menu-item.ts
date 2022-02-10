export class MenuItem {

    id: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    isActive: boolean;
    imageUrls: string[];

    constructor(mId: string, mName: string, mShortDesc: string, mLongDesc: string, mPrice: number, mActive: boolean = true, mImageUrls: string[]){
      this.id = mId;
      this.name = mName;
      this.shortDescription = mShortDesc;
      this.longDescription = mLongDesc;
      this.price = mPrice;
      this.imageUrls = mImageUrls;
      this.isActive = mActive;
    }

}
