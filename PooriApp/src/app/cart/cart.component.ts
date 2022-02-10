import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/models/menu-item';

@Component({
  selector: 'sony-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cartList = [
      new MenuItem('p001', 'Poori Masal', 'Serves with aloo kurma,coconut chutney.',
         'Crisp, golden, soft, deep-fried bread that makes a great breakfast combo when paired with tasty bhaji or curry.', 45, true,
        ['https://lh5.ggpht.com/-qOsH7EtYuiU/UpWAnSO-pMI/AAAAAAAAW98/ZvDHrB5cm0A/poori-picture_thumb3.jpg?imgmax=800']),
      new MenuItem('p002', 'Palak Poori', 'Palak Poori|Fried Spinach Puffed Bread is a delicious Indian puffed bread made with spinach puree and a few spices.',
      'Blanch spinach in hot water. Add blanched spinach, ginger, and green chili to a blender and blend to make a smooth puree', 79, true,
      ['https://www.indianveggiedelight.com/wp-content/uploads/2019/09/palak_poori-1.webp'])
    ]
  }

}
