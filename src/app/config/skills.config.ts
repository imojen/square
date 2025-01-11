export interface Skill {
  name: string;
  cost: number;
  description: string;
  purchased: boolean;
  active: boolean;
  prerequisites?: string[];
  levelRequirement?: number;
  icon: string;
}

export const skills: Skill[] = [
  {
    name: 'Double',
    cost: 20,
    description: 'Allumez deux carrés en un clic',
    purchased: false,
    active: false,
    icon: 'fas fa-clone',
  },
  {
    name: 'Triple',
    cost: 50,
    description: 'Allumez trois carrés en un clic',
    purchased: false,
    active: false,
    prerequisites: ['Double'],
    icon: 'fas fa-layer-group',
  },
  {
    name: 'Quadruple',
    cost: 100,
    description: 'Allumez quatre carrés en un clic',
    purchased: false,
    active: false,
    prerequisites: ['Triple'],
    icon: 'fas fa-th-large',
  },
  {
    name: 'Quintuple',
    cost: 200,
    description: 'Allumez cinq carrés en un clic',
    purchased: false,
    active: false,
    prerequisites: ['Quadruple'],
    icon: 'fas fa-th',
  },
  {
    name: 'Auto-clic',
    cost: 500,
    description: '1 clic automatique par seconde',
    purchased: false,
    active: false,
    icon: 'fas fa-mouse-pointer',
  },
  {
    name: 'Auto-clic x2',
    cost: 1000,
    description: '2 clics automatiques par seconde',
    purchased: false,
    active: false,
    prerequisites: ['Auto-clic'],
    icon: 'fas fa-mouse',
  },
  {
    name: 'Carré Critique Lv 1',
    cost: 800,
    description: "10% de chance d'allumer tous les carrés adjacents",
    purchased: false,
    active: false,
    icon: 'fas fa-bolt',
  },
  {
    name: 'Carré Critique Lv 2',
    cost: 1500,
    description:
      "10% de chance d'allumer tous les carrés adjacents et diagonaux",
    purchased: false,
    active: false,
    prerequisites: ['Carré Critique Lv 1'],
    icon: 'fas fa-bolt',
  },
  {
    name: 'Carré Souris Lv 1',
    cost: 3000,
    description: 'Changez la couleur du carré au survol de la souris',
    purchased: false,
    active: false,
    icon: 'fas fa-hand-pointer',
  },
  {
    name: 'Carré Souris Lv 2',
    cost: 3000,
    description: 'Transforme les carrés noirs en blancs au survol de la souris',
    purchased: false,
    active: false,
    prerequisites: ['Carré Souris Lv 1'],
    icon: 'fas fa-hand-pointer',
  },
  {
    name: 'Règle Horizontale',
    cost: 1000,
    description: "5% de chance d'allumer toute la ligne",
    purchased: false,
    active: false,
    levelRequirement: 2,
    icon: 'fas fa-arrows-alt-h',
  },
  {
    name: 'Règle Verticale',
    cost: 2000,
    description: "5% de chance d'allumer toute la colonne",
    purchased: false,
    active: false,
    prerequisites: ['Règle Horizontale'],
    levelRequirement: 2,
    icon: 'fas fa-arrows-alt-v',
  },
  {
    name: 'Réduction Auto-clic Lv 1',
    cost: 1000,
    description: "Réduit le délai de l'auto-clic de 0,05 secondes par niveau",
    purchased: false,
    active: false,
    prerequisites: ['Auto-clic x2'],
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Réduction Auto-clic Lv 2',
    cost: 1000,
    description:
      "Réduit encore le délai de l'auto-clic de 0,05 secondes par niveau",
    purchased: false,
    active: false,
    prerequisites: ['Réduction Auto-clic Lv 1'],
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Réduction Auto-clic Lv 3',
    cost: 1000,
    description:
      "Réduit encore le délai de l'auto-clic de 0,05 secondes par niveau",
    purchased: false,
    active: false,
    prerequisites: ['Réduction Auto-clic Lv 2'],
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Réduction Auto-clic Lv 4',
    cost: 1000,
    description:
      "Réduit encore le délai de l'auto-clic de 0,05 secondes par niveau",
    purchased: false,
    active: false,
    prerequisites: ['Réduction Auto-clic Lv 3'],
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Réduction Auto-clic Lv 5',
    cost: 1000,
    description:
      "Réduit encore le délai de l'auto-clic de 0,05 secondes par niveau",
    purchased: false,
    active: false,
    prerequisites: ['Réduction Auto-clic Lv 4'],
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Carré Critique Lv 3',
    cost: 2000,
    description: 'Augmente les chances de critiques à 20%',
    purchased: false,
    active: false,
    prerequisites: ['Carré Critique Lv 2'],
    icon: 'fas fa-bolt',
  },
  {
    name: 'Rond',
    cost: 2000,
    description: 'Transforme les carrés en ronds',
    purchased: false,
    active: false,
    icon: 'fas fa-circle',
  },
  {
    name: 'Réduction Auto-clic Lv 6',
    cost: 2000,
    description:
      "Réduit encore le délai de l'auto-clic de 0,05 secondes par niveau",
    purchased: false,
    active: false,
    prerequisites: ['Réduction Auto-clic Lv 5'],
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Réduction Auto-clic Lv 7',
    cost: 2000,
    description:
      "Réduit encore le délai de l'auto-clic de 0,05 secondes par niveau",
    purchased: false,
    active: false,
    prerequisites: ['Réduction Auto-clic Lv 6'],
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Réduction Auto-clic Lv 8',
    cost: 2000,
    description:
      "Réduit encore le délai de l'auto-clic de 0,05 secondes par niveau",
    purchased: false,
    active: false,
    prerequisites: ['Réduction Auto-clic Lv 7'],
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Réduction Auto-clic Lv 9',
    cost: 2000,
    description:
      "Réduit encore le délai de l'auto-clic de 0,05 secondes par niveau",
    purchased: false,
    active: false,
    prerequisites: ['Réduction Auto-clic Lv 8'],
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Réduction Auto-clic Lv 10',
    cost: 2000,
    description:
      "Réduit encore le délai de l'auto-clic de 0,05 secondes par niveau",
    purchased: false,
    active: false,
    prerequisites: ['Réduction Auto-clic Lv 9'],
    icon: 'fas fa-tachometer-alt',
  },
];
