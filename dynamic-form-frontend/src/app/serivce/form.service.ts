import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({providedIn:"root"})
export class FormService{

  constructor(private http:HttpClient) {
  }
  private httpOptions = {
    headers: new HttpHeaders({'contentType': 'application/json' })
  };

  getForms(){
    return this.http.get('http://localhost:8080/form').subscribe((data) => {
      console.log(data);
    });
  }

}
