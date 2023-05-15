import { Component } from '@angular/core';
import {QuestionService} from "./serivce/question.service";
import {Observable} from "rxjs";
import {QuestionBase} from "./model/qustion-base.model";
import {MatDialog} from "@angular/material/dialog";
import {CreateFormDialogComponent} from "./dialog/create-form-dialog/create-form-dialog.component";
import {FormService} from "./serivce/form.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService , public dialog: MatDialog ,private formService:FormService ) {

    this.questions$ = service.getQuestions();
    console.log(this.questions$);
    this.formService.getForms();
  }

  description: string;
  name: string;



  openCreateFormDialog(): void {
    const dialogRef = this.dialog.open(CreateFormDialogComponent, {
      data: {name: this.name, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.description = result;
    });
  }
}
