import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  constructor(private _AuthService: AuthService, private Router: Router) {}
  handleLogout() {
    this._AuthService.logout().subscribe({
      next: (res) => {
        localStorage.clear();
        this.Router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
