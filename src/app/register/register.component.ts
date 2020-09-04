import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myFormGroup = new FormGroup({
    "First_Name": new FormControl('', [
      Validators.required,Validators.pattern("[a-zA-Z ]*")
    ]),

    "Last_Name": new FormControl('', [
      Validators.required,Validators.pattern("[a-zA-Z]*")
    ]),

    "Email": new FormControl('', [
      Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[.]+[a-zA-z0-9-.]+$")
    ]),

    "Password": new FormControl(),

    "Confirm_Password": new FormControl()
  });



  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  async registerUser() {
    const input = this.myFormGroup.value;
    console.log(input);
    const url = "http://localhost:3000/register";
    await this.http.post(url, input).toPromise();
    this.myFormGroup.reset();
  }

  get First_Name(){
    return this.myFormGroup.get('First_Name');
  };

  get Last_Name(){
    return this.myFormGroup.get('Last_Name');
  };

  get Email(){
    return this.myFormGroup.get('Email');
  };

}
