export interface SiteAttributes {
  name?: string;
  resistence?: number;
  support?: number;
  tolerance?: number;
  cash?: number;
  combat?: number;
  defense?: number;
  stealth?: number;
  detect?: number;
  chaos?: number;
  control?: number;
  healing?: number;
  influence?: number;
  research?: number;
  strength?: number;
  melee?: number;
  range?: number;
  fighting?: number;
  martial_arts?: number;
  equipment_discount?: number;
  research_level?: number;
}
export class Site {
  constructor(protected attributes: SiteAttributes) {
  }
}
