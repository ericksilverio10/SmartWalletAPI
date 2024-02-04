import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { UserDTO } from 'src/app/model/UserDTO';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class PersonalInfoComponent implements OnInit {
 constructor(private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService) {}
  userData: UserDTO = new UserDTO();
  imagemCarregada: boolean = false;
  tempoDeCarregamento: number = 0;

  routerLink(path: String) {

    if(this.verifyFields()) {
      sessionStorage.setItem("userData", JSON.stringify(this.userData));
      this.router.navigate([path])
    }
    else {
      alert("preencha todos os campos corretamente!");
    }

    
  }

  back() {
    sessionStorage.removeItem("userData");
    this.router.navigate(["login"]);
  }

  show(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  onImageLoad() {

    this.imagemCarregada = true;
  }

  ngOnInit(): void {

    if(sessionStorage.getItem("userData") != null) {
      this.userData = JSON.parse(sessionStorage.getItem("userData") || "") as UserDTO;
    }

    this.imagemCarregada = false;

  }

  verifyFields(): boolean {


    if(
      (this.userData.fullname == undefined || this.userData.fullname == '' ) || 
      (this.userData.username == undefined || this.userData.username == '' ) || 
      (this.userData.email == undefined || this.userData.email == '' ) || 
      (this.userData.phonenumber == undefined || this.userData.phonenumber == '' ))
    {
      return false;
    } 
    return true;
  }


  confirm2(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}

}
