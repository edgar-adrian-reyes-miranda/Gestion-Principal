import { routes } from './app.module';
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
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {authInterceptorProviders} from './services/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,   
  ],
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
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    
  ],
  exports: [RouterModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}