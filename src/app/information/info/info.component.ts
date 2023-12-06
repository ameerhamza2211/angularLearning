import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  constructor(private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate(['/info', route]);
  }
}
