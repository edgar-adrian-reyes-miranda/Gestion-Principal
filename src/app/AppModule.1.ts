import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MenuComponent } from "./Pages/menu/menu.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from "@angular/common/http";
import {PortadaComponent} from "./Inicio/portada/portada.component";
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
    declarations: [
        AppComponent,
    ],
    exports: [RouterModule],
    providers: [CookieService],
    bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortadaComponent,
    MenuComponent,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PortadaComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  
  ]
})
export class AppModule {
}
