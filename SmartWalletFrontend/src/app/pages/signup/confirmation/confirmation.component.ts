import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent implements OnInit {
  constructor(private router: Router) {}
  imagemCarregada: boolean = false;
  value!: string;

  routerLink(path: String) {
    this.router.navigate([path])
  }

  onImageLoad() {

    this.imagemCarregada = true;
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("userData") == null || sessionStorage.getItem("userData") == '') {
      this.router.navigate(['signup/personal-info'])
    }
    this.imagemCarregada = false;

  }
}
