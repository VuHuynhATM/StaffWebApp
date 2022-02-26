import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css']
})
export class PanelMenuComponent implements OnInit {
  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
        {
        label: 'Book Service',
        icon:'pi pi-fw pi-file',
        items: [
            {
                label: 'New service',
                icon:'pi pi-fw pi-plus',
                routerLink:'/new-service'
            },
            {
                label: 'Search service',
                icon:'pi pi-fw pi-search',
                routerLink:'/service'
            }
        ]
        },
        {
        label: 'Book Manager',
        icon:'pi pi-fw pi-pencil',
        items: [
            {
                label: 'New book',
                icon:'pi pi-fw pi-plus',
                routerLink:'/book-new'
            },
            {
                label: 'Search book',
                icon:'pi pi-fw pi-search',
                routerLink:'/book-page'
            }
        ]
        }
    ];
  }
  
}


