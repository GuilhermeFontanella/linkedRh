import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from 'src/layout/layout.module';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { HeaderModule } from "../layout/header/header.module";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        RouterModule,
        LayoutModule,
        RippleModule,
        HeaderModule,
        HttpClientModule
    ],
})
export class AppModule { }
