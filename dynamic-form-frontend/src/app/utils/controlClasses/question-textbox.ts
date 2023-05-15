import { QuestionBase} from "../../model/qustion-base.model";

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}
