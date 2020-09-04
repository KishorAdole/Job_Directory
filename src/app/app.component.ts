import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  linklist=[
    {title:'Login', link:'login'},
    {title:'Register', link:'register'},
    {title:'ConfirmationMail', link:'confirmation-mail'},
    {title:'ForgetPassword', link:'forgetpassword'}
  ];

  constructor(private router:Router){}

  gotoRoute(page){
    this.router.navigate([page]);
  }
}
