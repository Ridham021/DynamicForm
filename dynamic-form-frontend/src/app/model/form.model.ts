import {Field} from "./field.model";

export interface FormModel{

  id:number,
  name:string,
  description:string,
  fields:Field[]
}
