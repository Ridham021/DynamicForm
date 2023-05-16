import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {QuestionBase} from "../model/qustion-base.model";
import {QuestionControlService} from "../serivce/question-control.service";
import {ActivatedRoute} from "@angular/router";
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit{
  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  formData: any;

  constructor(private qcs: QuestionControlService , private route: ActivatedRoute) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
    this.formData = this.route.snapshot?.data;
    console.log(this.formData); // xPrint the data
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }








}
