import { Component } from '@angular/core';
import { AuthService } from 'src/app/demo/servicefrontend/authe.service'; // adapte le chemin selon ton arborescence
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule  // ✅ Très important !
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  username = '';
  password = '';
  role = 'AGENT';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
      role: this.role
    };

    this.authService.register(user).subscribe({
      next: () => {
        alert('Inscription réussie');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de l’inscription');
      }
    });
  }
}