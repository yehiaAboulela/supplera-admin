import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _Router: Router,
    private _AuthService: AuthService
  ) {}
  error: boolean = false;
  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  handleForm() {
    this._AuthService.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response.message == 'done') {
          localStorage.setItem('token', response.access_token);
          this._Router.navigate(['/products']);
        }
      },
      error: (err) => {
        this.error = true;
      },
    });
  }
}
