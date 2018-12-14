import { Component } from '@angular/core';
import {Response} from '@angular/http';
import{HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient){}
  userName='';
 
  getrepoData(){
    this.http.get('https://api.github.com/users/'+this.userName+'/repos')
    .subscribe(
     (res:Response)=>{
       const repoList=res.json();
       console.log(repoList);
     } )
 }
}
