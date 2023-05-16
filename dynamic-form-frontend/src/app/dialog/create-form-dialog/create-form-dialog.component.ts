import {Component, Inject, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {FormModel} from "../../model/form.model";
import {FormService} from "../../serivce/form.service";


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-create-form-dialog',
  templateUrl: './create-form-dialog.component.html',
  styleUrls: ['./create-form-dialog.component.css']
})
export class CreateFormDialogComponent implements OnInit{

  newForm:any;
  constructor(
    public dialogRef: MatDialogRef<CreateFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formService:FormService
  ) {}


  ngOnInit() {
    this.newForm = new FormGroup({
        'name':new FormControl(null,Validators.required),
        'description':new FormControl(null,Validators.required)
    });

  }

  onAddForm(){
    console.log(this.newForm.value);
    let form:FormModel = {id:0,name:this.newForm.value.name,description:this.newForm.value.description,fields:[]};
    this.formService.addForm(form).subscribe((data) => {
      console.log(data);
    });
    this.dialogRef.close();

  }

}
