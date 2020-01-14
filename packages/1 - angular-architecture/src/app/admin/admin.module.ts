import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NewItensComponent } from './new-itens/new-itens.component';



@NgModule({
  declarations: [AdminPanelComponent, NewItensComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
