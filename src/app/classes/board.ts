import { Tile } from './tile';
export interface BoardOptions {
  tiles: number;
}

export class Board {
  tiles: Tile[] = [];

  constructor(options: BoardOptions) {
    this.createTiles(options.tiles);
  }

  createTiles(count: number) {
    while (count--) {
      this.tiles.push(new Tile());
    }
  }
}
