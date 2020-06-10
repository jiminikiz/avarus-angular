export class UnitAttributes {
  name: string;
  hire: number;
  upkeep: number;
  combat: number;
  defense: number;
  tech_level: number;
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


export class Unit {
  constructor(protected attributes: UnitAttributes) {
  }
}
