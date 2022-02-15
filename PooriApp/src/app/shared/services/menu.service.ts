import { Injectable } from '@angular/core';
import { MenuItem } from 'src/models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuList: MenuItem[] = [
    new MenuItem('p001', 'Poori Masal', 'Serves with aloo kurma,coconut chutney.',
       'Crisp, golden, soft, deep-fried bread that makes a great breakfast combo when paired with tasty bhaji or curry.', 45, true,
      ['https://lh5.ggpht.com/-qOsH7EtYuiU/UpWAnSO-pMI/AAAAAAAAW98/ZvDHrB5cm0A/poori-picture_thumb3.jpg?imgmax=800']),
    new MenuItem('p002', 'Palak Poori', 'Palak Poori|Fried Spinach Puffed Bread is a delicious Indian puffed bread made with spinach puree and a few spices.',
    'Blanch spinach in hot water. Add blanched spinach, ginger, and green chili to a blender and blend to make a smooth puree', 79, true,
    ['https://www.indianveggiedelight.com/wp-content/uploads/2019/09/palak_poori-1.webp']),
    new MenuItem('p003', 'Beetroot Poori', 'Made with Beetroot puree and a few spices.',
    'Bunch of beetroot in hot water. Add blanched beetroot, ginger, and green chili to a blender and blend to make a smooth puree', 99, true,
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixNapgrdarTrvY-X6lkJVa667vS2yuoBNAw&usqp=CAU']),
    new MenuItem('p004', 'Tomato Poori', 'Made with Tomato puree and a few spices.',
    'Bunch of Tomato in hot water. Add blanched Tomato, ginger, and green chili to a blender and blend to make a smooth puree', 69, true,
    ['https://vegrecipesofkarnataka.com/assets/img/tomato-poori/tomato-poori-recipe.jpg']),
    new MenuItem('p005', 'Chola Poori', 'Delicious large size poori with Alu curry',
    'Delicious large size poori with Alu curry', 120, true,
    ['https://5.imimg.com/data5/AR/DD/CA/SELLER-100054316/chola-poori-6-00-500x500.jpg']),
    new MenuItem('p006', 'Ragi Millet Poori', 'Delicious poori made with Ragi flour',
    'Delicious poori made with Ragi flour', 120, true,
    ['https://4.bp.blogspot.com/-dAU41as5toM/Wuf15Kq4kKI/AAAAAAAAamY/hd5eu9MiFQQWGHPNc1o-M0zRdQfbw45XgCLcBGAs/s1600/DSC_0156.JPG'])
  ];

  constructor() { }

  public getMenuList(): MenuItem[] {
    return [...this.menuList];
  }

  public getMenuItemById(menuId: string): MenuItem {
    return this.menuList.find(m => m.id == menuId);
  }
}
