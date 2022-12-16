import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordDifficultyService {
  difficulty: number = 0;

  getDifficulty() {
    return this.difficulty;
  }
  setDifficulty(diff: number) {
    this.difficulty = diff;
  }
  constructor() {}
}
