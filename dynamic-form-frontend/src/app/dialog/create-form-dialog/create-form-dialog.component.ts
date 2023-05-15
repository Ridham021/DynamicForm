import {Component, Inject, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";


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
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}


  ngOnInit() {
    this.newForm = new FormGroup({
        'name':new FormControl(null,Validators.required),
        'description':new FormControl(null,Validators.required)
    });

  }

  onAddForm(){
    console.log(this.newForm.value);
    this.dialogRef.close();

  }

}
