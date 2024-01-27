import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [InputTextModule, PasswordModule, ButtonModule, StepsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{

  items: MenuItem[] | undefined;
  randomInt: number | undefined;

  constructor(private router: Router){}

  goToHome() {
    this.router.navigate(['home'])
  }

  signUp() {
    this.router.navigate(['sign-up'])
  }

  ngOnInit(): void {
    this.randomInt = Math.floor(Math.random() * (5 - 1) + 1);


    
        this.items = [
            {
                label: 'Informe seus dados',
                routerLink: 'sign-up'
            },
            {
                label: 'Crie uma senha',
                routerLink: 'seat'
            },
            {
                label: 'Payment',
                routerLink: 'payment'
            }
        ];
    
  }

  value: string | undefined;
}
