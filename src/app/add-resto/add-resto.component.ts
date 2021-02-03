import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert:boolean=false
 addResto= new FormGroup({
   name: new FormControl(''),
   email: new FormControl(''),
   address: new FormControl('')
 })
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  collectresto(){
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
      console.warn("result is here",result)
      this.alert=true;
      this.addResto.reset({})
    })
  }
closeAlert(){
  this.alert=false
}
}
