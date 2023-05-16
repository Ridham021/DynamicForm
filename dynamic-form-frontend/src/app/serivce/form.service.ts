import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Form} from "@angular/forms";
import {ResponseModel} from "../model/response.model";
import {FormModel} from "../model/form.model";


@Injectable({providedIn:"root"})
export class FormService{

  constructor(private http:HttpClient) {
  }
  private httpOptions = {
    headers: new HttpHeaders({'contentType': 'application/json' })
  };
  form:FormModel[];
  getForms() {

    return this.http.get<{ statusCode: string, data: FormModel[], mMssage: string }>('http://localhost:8080/form');
  }

  addForm(form){
    return this.http.post<({ statusCode: string, data: FormModel[], mMssage: string })>('http://localhost:8080/form',form)
  }
}
