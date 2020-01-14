import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AsideMenuComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
