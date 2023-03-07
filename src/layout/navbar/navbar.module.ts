import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ],
  imports: [
    CommonModule,
    MenubarModule,
    TooltipModule,
    ButtonModule,
  ]
})
export class NavbarModule { }
