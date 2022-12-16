import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { ScaleComponent } from './scale/scale.component';
import { PasswordDifficultyService } from './services/password-difficulty.service';

@NgModule({
  declarations: [AppComponent, PasswordInputComponent, ScaleComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [PasswordDifficultyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
