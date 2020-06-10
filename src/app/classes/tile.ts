import { Site } from '@models/entities/site';

export class Tile {
  sites: Site[] = [];

  controlled = false;
  counts = {
    sites: 3
  };


  constructor() {
    while (this.counts.sites--) {
      this.sites.push(new Site({}));
    }
  }
}
