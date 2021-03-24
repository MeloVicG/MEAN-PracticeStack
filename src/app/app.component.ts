import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    console.log("in onInit");    
  }

  GetTasks(){
    this._httpService.getTasks()
  }

}
