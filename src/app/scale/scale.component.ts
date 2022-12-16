import { Component, OnInit } from '@angular/core';
import { PasswordDifficultyService } from '../services/password-difficulty.service';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss'],
})
export class ScaleComponent implements OnInit {
  passDifficulty: number = 0;

  colors: String[] = ['gray', 'gray', 'gray'];

  constructor(public passDiff: PasswordDifficultyService) {
    passDiff.get().subscribe((val) => (this.colors = this.getCollors(val)));
  }

  getCollors(difficulty: number): String[] {
    if (difficulty === 1) {
      return ['red', 'red', 'red'];
    }
    if (difficulty === 2) {
      return ['red', 'gray', 'gray'];
    }
    if (difficulty === 3) {
      return ['yellow', 'yellow', 'gray'];
    }
    if (difficulty === 4) {
      return ['green', 'green', 'green'];
    }
    return ['gray', 'gray', 'gray'];
  }

  ngOnInit(): void {}
}
