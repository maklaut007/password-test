import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { ScaleComponent } from './scale/scale.component';

@NgModule({
  declarations: [AppComponent, PasswordInputComponent, ScaleComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
