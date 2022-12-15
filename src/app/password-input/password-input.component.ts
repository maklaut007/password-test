import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent implements OnInit {
  passwordDifficulty: number = 0;
  passwordControl = new FormControl('');
  constructor() {}

  checkPasswordDifficulty = (pass: string) => {
    if (pass.length === 0) {
      this.passwordDifficulty = 0;
      return;
    }

    this.passwordDifficulty = 1;
    if (pass.length < 8) {
      return;
    }

    this.hasNumber(pass) ? this.passwordDifficulty++ : null;
    this.hasLetter(pass) ? this.passwordDifficulty++ : null;
    this.hasSymbol(pass) ? this.passwordDifficulty++ : null;
  };

  hasNumber = (str: string) => {
    return /\d/.test(str);
  };
  hasLetter = (str: string) => {
    return /[a-zA-Z]/.test(str);
  };
  hasSymbol = (str: string) => {
    return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
  };

  ngOnInit(): void {
    this.passwordControl.valueChanges.subscribe((value) => {
      this.checkPasswordDifficulty(value);
    });
  }
}
