import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/model/UserDTO';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrl: './create-password.component.scss'
})
export class CreatePasswordComponent implements OnInit {
  constructor(private router: Router) {}
  userData: UserDTO = new UserDTO();
  passwordConfirmation: string = '';
  passwordMatches: boolean = false;
  imagemCarregada: boolean = false;
  value!: string;
  loading: boolean = false;

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

  routerLink(path: String) {



    this.saveData();



    if(this.passwordMatches) {


      this.load();

      setTimeout(() => {
        this.router.navigate([path])
    }, 1000);
      
    }
  }

  onImageLoad() {

    this.imagemCarregada = true;
  }

  ngOnInit(): void {


    if(sessionStorage.getItem("userData") == null || sessionStorage.getItem("userData") == '') {
      this.router.navigate(['signup/personal-info'])
    }

    this.userData = JSON.parse(sessionStorage.getItem("userData") || "") as UserDTO;

    this.imagemCarregada = false;

  }

  verifyPwd() {

    this.passwordMatches = false;
    
    var pwdInput = document.getElementById("pwdConfirmation");


    if(this.passwordConfirmation == this.userData.password) {

      pwdInput?.classList.remove("ng-invalid")
      pwdInput?.classList.remove("ng-dirty")

      pwdInput?.blur();

      this.passwordMatches = true;
    }

    if(this.passwordConfirmation != this.userData.password) {

      pwdInput?.classList.add("ng-invalid")
      pwdInput?.classList.add("ng-dirty")


      this.passwordMatches = false;
    }

  }


  saveData(){
    sessionStorage.setItem("userData", JSON.stringify(this.userData));
  }

  back() {
    this.router.navigate(['signup/personal-info'])
  }

}
