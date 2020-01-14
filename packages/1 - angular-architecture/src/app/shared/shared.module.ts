import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipe } from './pipes/example.pipe';
import { ExampleDirective } from './directive/example.directive';
import { CardComponent } from './card/card.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [ExamplePipe, ExampleDirective, CardComponent, TesteComponent],
  imports: [
    CommonModule
  ],
  exports: [ExamplePipe, ExampleDirective, CardComponent]

})
export class SharedModule { }
