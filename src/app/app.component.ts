import { Component } from '@angular/core';
// import {Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient){}
    userName = '';
    repositList = [];
 
     getrepoData(){
    this.http.get('https://api.github.com/users/'+ this.userName +'/repos')
      .subscribe((data :any[])=>
        {
          if (data.length){
            for(var i=0;i<data.length;i++){
              (this.repositList).push(data[i].name)
            }

          }
          // console.log(data)
        }
      )
  }
}
