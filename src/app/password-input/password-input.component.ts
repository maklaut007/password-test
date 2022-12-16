import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PasswordDifficultyService } from '../services/password-difficulty.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent implements OnInit {
  passwordControl = new FormControl('');
  passwordDifficulty!: number;

  constructor(public passDiff: PasswordDifficultyService) {
    passDiff.get().subscribe((val) => (this.passwordDifficulty = val));
  }

  checkPasswordDifficulty = (pass: string) => {
    if (pass.length === 0) {
      this.passDiff.set(0);
      return;
    }

    this.passDiff.set(1);
    let symbolDiff: number = 1;

    if (pass.length < 8) {
      return;
    }

    this.hasNumber(pass) ? symbolDiff++ : null;
    this.hasLetter(pass) ? symbolDiff++ : null;
    this.hasSymbol(pass) ? symbolDiff++ : null;

    this.passDiff.set(symbolDiff);
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
