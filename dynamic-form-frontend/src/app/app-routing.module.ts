import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowFormComponent} from "./show-form/show-form.component";

const routes: Routes = [
  { path: 'openForm', component: ShowFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
