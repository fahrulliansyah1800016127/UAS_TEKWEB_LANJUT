import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDesign } from './material/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileService } from './services/mobile.service';
import { AddComponent } from './add.component';
import { IndexComponent } from './index.component';
import { EditComponent } from './edit.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, AddComponent, IndexComponent, EditComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialDesign,
    BrowserAnimationsModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
