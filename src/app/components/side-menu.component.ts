import { Component } from '@angular/core';
import { SquareService } from '../services/square.service';
import { NgFor, NgIf } from '@angular/common';
import { skills, Skill } from '../config/skills.config';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  skills: Skill[] = skills;

  constructor(public squareService: SquareService) {}

  highlightRandomSquare() {
    this.squareService.highlightRandomSquare();
  }

  canUnlockSkill(skill: Skill): boolean {
    const prerequisitesMet = skill.prerequisites
      ? skill.prerequisites.every(
          (prereq) => this.skills.find((s) => s.name === prereq)?.purchased
        )
      : true;
    const levelMet = skill.levelRequirement
      ? this.squareService.level >= skill.levelRequirement
      : true;
    return (
      prerequisitesMet &&
      levelMet &&
      this.squareService.getLitSquaresCount() >= skill.cost
    );
  }

  shouldShowSkill(skill: Skill): boolean {
    const prerequisitesMet = skill.prerequisites
      ? skill.prerequisites.every(
          (prereq) => this.skills.find((s) => s.name === prereq)?.purchased
        )
      : true;
    const levelMet = skill.levelRequirement
      ? this.squareService.level >= skill.levelRequirement
      : true;
    const litSquares = this.squareService.getLitSquaresCount();
    return (
      !skill.purchased &&
      prerequisitesMet &&
      levelMet &&
      litSquares >= skill.cost * 0.8
    );
  }

  unlockSkill(skill: Skill) {
    if (this.canUnlockSkill(skill)) {
      this.squareService.useSquares(skill.cost);
      this.squareService.activateSkill(skill.name);
      skill.purchased = true;
    }
  }
}
