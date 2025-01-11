import { Injectable } from '@angular/core';
import { PlayAreaComponent } from '../components/play-area.component';

@Injectable({
  providedIn: 'root',
})
export class SquareService {
  level = 1;
  squares: { color: string; isCritical: boolean }[] = [];
  activeSkills: { [key: string]: boolean } = {};
  autoSquareInterval: any;
  playAreaComponent!: PlayAreaComponent;
  autoSquareClicksPerSecond = 1;

  constructor() {
    this.initializeGrid();
    //this.testSetup();
  }

  initializeGrid() {
    const baseSize = 2500;
    const gridSize = Math.floor(baseSize * Math.pow(1.5, this.level - 1));
    this.squares = Array.from({ length: gridSize }, () => ({
      color: '#111111',
      isCritical: false,
    }));
  }

  testSetup() {
    for (let i = 0; i < 4500 && i < this.squares.length; i++) {
      this.squares[i].color = '#ffffff';
    }
  }

  highlightRandomSquare() {
    if (this.playAreaComponent.isPaused) return;

    let squaresToLight = 1;
    if (this.activeSkills['Quintuple']) {
      squaresToLight = 5;
    } else if (this.activeSkills['Quadruple']) {
      squaresToLight = 4;
    } else if (this.activeSkills['Triple']) {
      squaresToLight = 3;
    } else if (this.activeSkills['Double']) {
      squaresToLight = 2;
    }

    const unlitSquares = this.squares
      .map((square, index) => (square.color === '#111111' ? index : -1))
      .filter((index) => index !== -1);

    let litCount = 0;
    while (litCount < squaresToLight && unlitSquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * unlitSquares.length);
      const squareIndex = unlitSquares[randomIndex];
      this.squares[squareIndex].color = '#ffffff';
      litCount++;

      if (this.activeSkills['Règle Horizontale'] && Math.random() < 0.05) {
        this.lightUpRow(squareIndex);
      }

      if (this.activeSkills['Règle Verticale'] && Math.random() < 0.05) {
        this.lightUpColumn(squareIndex);
      }

      const criticalChance = this.activeSkills['Carré Critique Lv 3']
        ? 0.2
        : this.activeSkills['Carré Critique Lv 2']
        ? 0.1
        : this.activeSkills['Carré Critique Lv 1']
        ? 0.1
        : 0;

      if (Math.random() < criticalChance) {
        this.lightUpAdjacentSquares(squareIndex, true);
      }

      unlitSquares.splice(randomIndex, 1);
    }

    if (this.isGridFull()) {
      this.levelUp();
    }
  }

  levelUp() {
    this.level++;
    this.playAreaComponent.showLevelMessage();
  }

  lightUpRow(index: number) {
    const gridSize = Math.floor(Math.sqrt(this.squares.length));
    const rowStart = Math.floor(index / gridSize) * gridSize;
    for (let i = 0; i < gridSize; i++) {
      const rowIndex = rowStart + i;
      if (rowIndex >= 0 && rowIndex < this.squares.length) {
        this.squares[rowIndex].color = '#ffffff';
        this.squares[rowIndex].isCritical = true;
      }
    }
  }

  lightUpColumn(index: number) {
    const gridSize = Math.floor(Math.sqrt(this.squares.length));
    const columnStart = index % gridSize;
    for (let i = 0; i < gridSize; i++) {
      const columnIndex = columnStart + i * gridSize;
      if (columnIndex >= 0 && columnIndex < this.squares.length) {
        this.squares[columnIndex].color = '#ffffff';
        this.squares[columnIndex].isCritical = true;
      }
    }
  }

  isGridFull(): boolean {
    return this.squares.every((square) => square.color === '#ffffff');
  }

  lightUpAdjacentSquares(index: number, includeDiagonals: boolean) {
    const gridSize = Math.sqrt(this.squares.length);
    const adjacentIndices = [
      index - gridSize, // Above
      index + gridSize, // Below
      index - 1, // Left
      index + 1, // Right
    ];

    if (includeDiagonals) {
      adjacentIndices.push(
        index - gridSize - 1, // Top-left
        index - gridSize + 1, // Top-right
        index + gridSize - 1, // Bottom-left
        index + gridSize + 1 // Bottom-right
      );
    }

    adjacentIndices.forEach((adjIndex) => {
      if (adjIndex >= 0 && adjIndex < this.squares.length) {
        this.squares[adjIndex].color = '#ffffff';
        this.squares[adjIndex].isCritical = true;
      }
    });
  }

  getLitSquaresCount(): number {
    return this.squares.filter((square) => square.color === '#ffffff').length;
  }

  useSquares(count: number) {
    let used = 0;
    while (used < count) {
      const litSquares = this.squares.filter(
        (square) => square.color === '#ffffff'
      );
      if (litSquares.length === 0) break;
      const randomIndex = Math.floor(Math.random() * litSquares.length);
      litSquares[randomIndex].color = '#111111';
      used++;
    }
  }

  activateSkill(skillName: string) {
    this.activeSkills[skillName] = true;
    if (skillName === 'Auto-clic') {
      this.startAutoSquare(1);
    } else if (skillName === 'Auto-clic x2') {
      this.startAutoSquare(2);
    } else if (skillName.startsWith('Réduction Auto-clic Lv')) {
      this.updateAutoSquareInterval();
    }
  }

  updateAutoSquareInterval() {
    let baseInterval = 1000; // Base interval in milliseconds
    const reduceLevels = Object.keys(this.activeSkills).filter(
      (skill) =>
        skill.startsWith('Réduction Auto-clic Lv') && this.activeSkills[skill]
    ).length;
    const reduction = 0.05 * reduceLevels * 1000; // Convert seconds to milliseconds
    baseInterval = Math.max(100, baseInterval - reduction); // Ensure a minimum interval
    this.startAutoSquare(this.autoSquareClicksPerSecond, baseInterval);
  }

  startAutoSquare(clicksPerSecond: number, interval: number = 1000) {
    if (this.autoSquareInterval) {
      clearInterval(this.autoSquareInterval);
    }
    this.autoSquareInterval = setInterval(() => {
      for (let i = 0; i < clicksPerSecond; i++) {
        this.highlightRandomSquare();
      }
    }, interval);
  }
}
