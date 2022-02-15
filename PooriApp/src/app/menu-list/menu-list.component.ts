import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/models/menu-item';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'sony-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menuList : MenuItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuList = this.menuService.getMenuList();
  }

}
