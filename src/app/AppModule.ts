import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingupComponent } from './pages/singup/singup.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shares/footer/footer.component';
import { HeaderComponent } from './shares/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { routes } from './app.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SingupComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    MatIconModule,
  ],
  exports: [RouterModule]
})
export class AppModule {
}
