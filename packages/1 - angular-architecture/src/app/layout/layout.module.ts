import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuAsideComponent } from './menu-aside/menu-aside.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, MenuAsideComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
