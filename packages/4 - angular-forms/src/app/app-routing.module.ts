import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeboxComponent } from './codebox/codebox.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: '',
    component: CodeboxComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
