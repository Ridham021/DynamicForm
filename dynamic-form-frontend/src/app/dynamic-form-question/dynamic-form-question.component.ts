import {Component, Input} from '@angular/core';
import {QuestionBase} from "../model/qustion-base.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-frontend-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
