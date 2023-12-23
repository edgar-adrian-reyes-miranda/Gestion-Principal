import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MenuComponent } from "./Pages/menu/menu.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from "@angular/common/http";




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
        MenuComponent,
        BrowserAnimationsModule,
        HttpClientModule,
    ]
})
export class AppModule {
}
