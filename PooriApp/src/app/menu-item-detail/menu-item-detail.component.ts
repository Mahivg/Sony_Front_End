import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/models/menu-item';

@Component({
  selector: 'sony-menu-item-detail',
  templateUrl: './menu-item-detail.component.html',
  styleUrls: ['./menu-item-detail.component.scss']
})
export class MenuItemDetailComponent implements OnInit {

  menuItem: MenuItem =  new MenuItem('p001', 'Poori Masal', 'Serves with aloo kurma,coconut chutney.',
  'Crisp, golden, soft, deep-fried bread that makes a great breakfast combo when paired with tasty bhaji or curry.', 45, true,
 ['https://lh5.ggpht.com/-qOsH7EtYuiU/UpWAnSO-pMI/AAAAAAAAW98/ZvDHrB5cm0A/poori-picture_thumb3.jpg?imgmax=800']);

  constructor() { }

  ngOnInit(): void {
  }

}
