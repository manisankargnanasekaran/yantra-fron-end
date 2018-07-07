import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { SessionsComponent } from './sessions/sessions.component';
import { Router } from '@angular/router';
import  { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';
import { LoginService } from './sessions/login.service';


@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
