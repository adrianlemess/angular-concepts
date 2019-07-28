import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipe } from './pipes/example.pipe';
import { ExampleDirective } from './directive/example.directive';
import { SharedComponent } from './componentes/shared/shared.component';



@NgModule({
  declarations: [ExamplePipe, ExampleDirective, SharedComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
