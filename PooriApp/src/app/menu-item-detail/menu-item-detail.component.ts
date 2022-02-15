import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'src/models/menu-item';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'sony-menu-item-detail',
  templateUrl: './menu-item-detail.component.html',
  styleUrls: ['./menu-item-detail.component.scss']
})
export class MenuItemDetailComponent implements OnInit {

  menuItem: MenuItem;

  constructor(private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(pathParams => {
      const menuId = pathParams.menuId;
      this.menuItem = this.menuService.getMenuItemById(menuId);
    });
  }

}
