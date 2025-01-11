import { Component } from '@angular/core';
import { SquareService } from '../services/square.service';
import { NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-play-area',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf],
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.css'],
})
export class PlayAreaComponent {
  isPaused = false;
  levelMessage = '';

  constructor(public squareService: SquareService) {
    this.squareService.playAreaComponent = this;
  }

  toggleSquareColor(square: { color: string; isCritical: boolean }) {
    if (this.squareService.activeSkills['Carré Souris Lv 2']) {
      if (square.color === '#111111') {
        square.color = '#ffffff';
      }
    } else if (this.squareService.activeSkills['Carré Souris Lv 1']) {
      square.color = square.color === '#ffffff' ? '#111111' : '#ffffff';
    }
  }

  get gridSize(): number {
    return Math.floor(Math.sqrt(this.squareService.squares.length));
  }

  get gridStyle() {
    const size = this.gridSize;
    return {
      'grid-template-columns': `repeat(${size}, 1fr)`,
      'grid-template-rows': `repeat(${size}, 1fr)`,
    };
  }

  showLevelMessage() {
    if (this.squareService.level > 1) {
      this.isPaused = true;
      this.levelMessage = `Level ${this.squareService.level}`;
      setTimeout(() => {
        this.isPaused = false;
        this.levelMessage = '';
        this.squareService.initializeGrid();
      }, 3000);
    } else {
      this.squareService.initializeGrid();
    }
  }
}
