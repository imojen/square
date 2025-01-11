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
    cost: 30,
    description: 'Square once, light up two',
    purchased: false,
    active: false,
    icon: 'fas fa-clone',
  },
  {
    name: 'Triple',
    cost: 100,
    description: 'Square once, light up three',
    purchased: false,
    active: false,
    prerequisites: ['Double'],
    icon: 'fas fa-layer-group',
  },
  {
    name: 'Quadruple',
    cost: 200,
    description: 'Square once, light up four',
    purchased: false,
    active: false,
    prerequisites: ['Triple'],
    icon: 'fas fa-th-large',
  },
  {
    name: 'Quintuple',
    cost: 400,
    description: 'Square once, light up five',
    purchased: false,
    active: false,
    prerequisites: ['Quadruple'],
    icon: 'fas fa-th',
  },
  {
    name: 'Auto-square',
    cost: 1000,
    description: '1x Square click / sec',
    purchased: false,
    active: false,
    icon: 'fas fa-mouse-pointer',
  },
  {
    name: 'Auto-square x2',
    cost: 1000,
    description: '2x Square clicks / sec',
    purchased: false,
    active: false,
    prerequisites: ['Auto-square'],
    icon: 'fas fa-mouse',
  },
  {
    name: 'Critical Square Lv 1',
    cost: 800,
    description: '10% chance to light up all adjacent squares',
    purchased: false,
    active: false,
    icon: 'fas fa-bolt',
  },
  {
    name: 'Critical Square Lv 2',
    cost: 1500,
    description: '10% chance to light up all adjacent and diagonal squares',
    purchased: false,
    active: false,
    prerequisites: ['Critical Square Lv 1'],
    icon: 'fas fa-bolt',
  },
  {
    name: 'Mouse Square Lv 1',
    cost: 3000,
    description: 'Toggle square color on mouse hover',
    purchased: false,
    active: false,
    icon: 'fas fa-hand-pointer',
  },
  {
    name: 'Mouse Square Lv 2',
    cost: 3000,
    description: 'Turn black squares to white on mouse hover',
    purchased: false,
    active: false,
    prerequisites: ['Mouse Square Lv 1'],
    icon: 'fas fa-hand-pointer',
  },
  {
    name: 'Horizontal Rule',
    cost: 1000,
    description: '5% chance to light up the entire row',
    purchased: false,
    active: false,
    levelRequirement: 2,
    icon: 'fas fa-arrows-alt-h',
  },
  {
    name: 'Vertical Rule',
    cost: 2000,
    description: '5% chance to light up the entire column',
    purchased: false,
    active: false,
    prerequisites: ['Horizontal Rule'],
    levelRequirement: 2,
    icon: 'fas fa-arrows-alt-v',
  },
  {
    name: 'Reduce Auto Square Lv 1',
    cost: 2000,
    description: 'Reduces auto-click delay by 0.05 seconds per skill level',
    purchased: false,
    active: false,
    prerequisites: ['Auto-square x2'],
    levelRequirement: 2,
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Reduce Auto Square Lv 2',
    cost: 3000,
    description:
      'Further reduces auto-click delay by 0.05 seconds per skill level',
    purchased: false,
    active: false,
    prerequisites: ['Reduce Auto Square Lv 1'],
    levelRequirement: 2,
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Reduce Auto Square Lv 3',
    cost: 4000,
    description:
      'Further reduces auto-click delay by 0.05 seconds per skill level',
    purchased: false,
    active: false,
    prerequisites: ['Reduce Auto Square Lv 2'],
    levelRequirement: 3,
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Reduce Auto Square Lv 4',
    cost: 5000,
    description:
      'Further reduces auto-click delay by 0.05 seconds per skill level',
    purchased: false,
    active: false,
    prerequisites: ['Reduce Auto Square Lv 3'],
    levelRequirement: 4,
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Reduce Auto Square Lv 5',
    cost: 6000,
    description:
      'Further reduces auto-click delay by 0.05 seconds per skill level',
    purchased: false,
    active: false,
    prerequisites: ['Reduce Auto Square Lv 4'],
    levelRequirement: 5,
    icon: 'fas fa-tachometer-alt',
  },
];
