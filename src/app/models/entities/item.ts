export interface ItemAttributes {
  name: string;
  type: number;
  research_cost: number;
  cost: number;
  tech_level: number;
  combat: number;
  defense: number;
  stealth: number;
  detect: number;
  chaos: number;
  control: number;
  healing: number;
  influence: number;
  research: number;
  strength: number;
  melee: number;
  range: number;
  fighting: number;
  martial_arts: number;
}

export class Item {
  constructor(protected attributes: ItemAttributes) {
  }
}
