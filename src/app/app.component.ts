import { Component, VERSION } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Lucca Angular fire project';

  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  EmailLogin() {
    this.authService.EmailLogin(this.email, this.password);
    this.email = this.password = '';
  }

  GoogleLogin() {
    this.authService.GoogleLogin();
  }

  Logout(){
    this.authService.logout();
  }
}
