import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/restaurants";
  rooturl =  "http://localhost:3000/users"
  constructor(private http:HttpClient ) {}
    getList()
    {
      return this.http.get(this.url);
    }
    saveResto(data: any){
      return this.http.post(this.url,data);
    }
    saveuser(userdata: any){
     return this.http.post(this.rooturl,userdata);
    }
}
