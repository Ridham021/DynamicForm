import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormService} from "../../serivce/form.service";
import {DialogData} from "../create-form-dialog/create-form-dialog.component";
import {FormModel} from "../../model/form.model";

@Component({
  selector: 'app-add-form-field-dialog',
  templateUrl: './add-form-field-dialog.component.html',
  styleUrls: ['./add-form-field-dialog.component.css']
})
export class AddFormFieldDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddFormFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public form: FormModel,
    private formService:FormService
  ) {}

  addField(){

  }
}
