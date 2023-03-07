import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AvatarModule } from 'primeng/avatar';



@NgModule({
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    NavbarModule,
    AvatarModule
  ]
})
export class HeaderModule { }
