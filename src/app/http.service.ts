import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  //make ajax request to so server can respond back
  getTasks(){
    let tempObservable = this._http.get('/tasks')
    tempObservable.subscribe(data =>{
      console.log("data from service", data);
      console.log(tempObservable);
      
    })
  }


}
