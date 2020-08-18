import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';

import {TabMenuModule} from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[]= [
    {label: 'Home', icon: 'pi pi-fw pi-home'},
    {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    
];

  constructor() { }

  ngOnInit() : void{
    // this.items = [
    //     {label: 'Home', icon: 'pi pi-fw pi-home'},
    //     {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    //     {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    //     {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    //     {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    // ];
}

}
