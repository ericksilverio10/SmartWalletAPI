import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrl: './create-password.component.scss'
})
export class CreatePasswordComponent implements OnInit {
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

    this.imagemCarregada = false;

  }

}
