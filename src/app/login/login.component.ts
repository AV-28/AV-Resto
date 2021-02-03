import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new FormGroup({
    email: new FormControl('sggyags'),
    password: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }
  
  loginresto(){
    console.warn(this.login.value);
  }

}
