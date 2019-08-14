import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersComponent } from './registers/registers.component';
import { LogsComponent } from './logs/logs.component';



@NgModule({
  declarations: [RegistersComponent, LogsComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
