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
      Validators.required,Validators.pattern("a-zA-Z")
    ]),

    "Last_Name": new FormControl('', [
      Validators.required,Validators.pattern("a-zA-Z")
    ]),

    "Email": new FormControl(),

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

}
