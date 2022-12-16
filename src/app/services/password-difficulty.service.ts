import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordDifficultyService {
  difficulty: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get(): BehaviorSubject<number> {
    return this.difficulty;
  }
  set(diff: number) {
    this.difficulty.next(diff);
  }
  constructor() {}
}
