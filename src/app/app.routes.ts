import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SalesComponent } from './sales/sales.component';
import { InfoComponent } from './information/info/info.component';
import { AgendaDeatilsComponent } from './information/info/components/agenda-deatils/agenda-deatils.component';
import { AttendenceDeatilsComponent } from './information/info/components/attendence-deatils/attendence-deatils.component';
import { SalesDetailsComponent } from './information/info/components/sales-details/sales-details.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: CardComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'info',
    component: InfoComponent,children:[
      {path:'agenda-deatils',component:AgendaDeatilsComponent},
      {path:'attendence-details',component:AttendenceDeatilsComponent},
      {path:'sales-details',component:SalesDetailsComponent},
    ]
  },
];
