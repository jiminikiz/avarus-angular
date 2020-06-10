export class Die {
  sides: number;

  constructor (sides: number) {
    this.sides = sides || 6;
  }

  shaker (die: number, sides = this.sides) {
    const rolls = [];
    let roll, total = 0;

    while ( die-- > 0 ) {
      roll = this.roll(sides);
      rolls.push(roll);
      total += roll;
    }
    return {
      total: total,
      rolls: rolls
    };
  }
  roll (sides) {
    return Math.floor(1 + Math.random() * (sides || this.sides));
  }
}
