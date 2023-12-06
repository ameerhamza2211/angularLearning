import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreeNode } from 'primeng/api/treenode';
import { TreeModule } from 'primeng/tree';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TreeModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items =  [
    {
      icon:'pi pi-user',
      name:'Dashboard',
      route:'dashboard',
    },
    {
      icon:'pi pi-tag',
      name:'Sales',
      route:'sales',
    },
    {
      icon:'pi pi-user-edit',
      name:'Attendance',
      route:'attendance',
    },
    {
      icon:'pi pi-users',
      name:'Apply',
      route:'apply',
    },
    {
      icon:'pi pi-tag',
      name:'Information',
      route:'info',
    }
  ]
}
