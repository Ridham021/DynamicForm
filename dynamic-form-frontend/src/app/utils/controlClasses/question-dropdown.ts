import { QuestionBase} from "../../model/qustion-base.model";

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}
