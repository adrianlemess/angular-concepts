import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipe } from './pipes/example.pipe';
import { ExampleDirective } from './directive/example.directive';

@NgModule({
  declarations: [ExamplePipe, ExampleDirective],
  imports: [
    CommonModule
  ],
  exports: [ExamplePipe, ExampleDirective]

})
export class SharedModule { }
