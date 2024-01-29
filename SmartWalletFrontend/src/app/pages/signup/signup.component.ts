import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  providers: [MessageService]
})
export class SignupComponent implements OnInit {
  items: MenuItem[] | undefined;

  activeIndex: number = 0;


  constructor(public messageService: MessageService) {}

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  ngOnInit() {
    this.items = [
        {
            label: 'Informações pessoais',
            routerLink: 'personal-info'
        },
        {
            label: 'Crie sua senha',
            routerLink: 'create-password'
        },
        {
            label: 'Confirmação',
            routerLink: 'confirmation'
        }
    ];
}
}
