import { Component } from '@angular/core';
import {QuestionService} from "./serivce/question.service";
import {Observable, Subscription} from "rxjs";
import {QuestionBase} from "./model/qustion-base.model";
import {MatDialog} from "@angular/material/dialog";
import {CreateFormDialogComponent} from "./dialog/create-form-dialog/create-form-dialog.component";
import {FormService} from "./serivce/form.service";
import {Form} from "@angular/forms";
import {ResponseModel} from "./model/response.model";
import {FormModel} from "./model/form.model";
import {Router} from "@angular/router";
import {AddFormFieldDialogComponent} from "./dialog/add-form-field-dialog/add-form-field-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 formArray:FormModel[];

  questions$: Observable<QuestionBase<any>[]>;
  description: string;
  name: string;

  title: 'dynamic-form';



  constructor(service: QuestionService , public dialog: MatDialog ,private formService:FormService ,
              private router:Router) {

    this.questions$ = service.getQuestions();
    console.log(this.questions$);
 this.formService.getForms().subscribe((data) => {
   this.formArray = data.data;
 });
  }



  openCreateFormDialog(): void {
    const dialogRef = this.dialog.open(CreateFormDialogComponent, {
      data: {name: this.name, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.description = result;
      this.formService.getForms().subscribe((data) => {
        this.formArray = data.data;
        console.log(this.formArray);
      });
    });
  }

  onCardClick(f:FormModel){
          // this.router.navigate(['/openForm'],{ state: { data: f } })
    const dialogRef = this.dialog.open(AddFormFieldDialogComponent, {
      data: f,
      width: '800px'
    });
  }
}
