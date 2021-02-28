import { RestoService } from './../resto.service';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email: new FormControl(''),
    password:new FormControl(''),
    confirmpassword:new FormControl('')
  })

  constructor(private registeruser: RestoService) { }
  

  ngOnInit(): void {
  }
  registerresto(){
    this.registeruser.saveuser(this.register.value).subscribe((result)=>{
      console.warn("result is here",result);
      this.register.reset({});
    })
  }

}
