import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
  providers: [MessageService]
})
export class PersonalInfoComponent implements OnInit {
 constructor(private router: Router, private messageService: MessageService) {}

  imagemCarregada: boolean = false;
  tempoDeCarregamento: number = 0;

  routerLink(path: String) {
    this.router.navigate([path])

  }

  show(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  onImageLoad() {

    this.imagemCarregada = true;
  }

  ngOnInit(): void {

    this.imagemCarregada = false;

  }


}
