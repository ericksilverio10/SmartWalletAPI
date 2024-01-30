import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, PasswordModule, ButtonModule, ProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  randomInt: number | undefined;
  imagemCarregada: boolean = false;

  constructor(private router: Router){}

  goToHome() {
    this.router.navigate(['home'])
  }

  signUp() {
    this.router.navigate(['signup'])
  }

  onImageLoad() {

    this.imagemCarregada = true;
  }

  ngOnInit(): void {

    this.imagemCarregada = false;
    this.randomInt = Math.floor(Math.random() * (5 - 1) + 1);
  }

  value: string | undefined;
}
