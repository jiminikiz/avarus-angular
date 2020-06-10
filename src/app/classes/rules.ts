import { Die } from './die';

export const Dice = new Die(6);

export class Rules {

  static attack() {

  }

  static chaos (sector, gangs) {
    const sum = 0;
    const chaosForce = gangs.reduce((numDice, gang) => (numDice += gang.force + gang.chaos), sum);
    const cash = Rules.choose(chaosForce + sector.income).length;

    return sector.isControlled ? cash : Math.round(cash * 0.5);
  }

  static equip() {

  }

  static control (sector, challengers, defenders = []) {
    // accumulators
    const sum1 = 0,
      sum2 = 0,
      sum3 = 0;

    // calculate the total control of the the challenging gang
    const challengingControl = challengers.reduce((numDice, gang) => numDice + (gang.force + gang.control), sum1);

    // if the sector is not controlled, return calculcation
    if (!sector.isControlled) {
      return challengingControl - sector.income;
    }

    // else, calculate the defending gangs control
    const defendingControl = defenders.reduce((numDice, gang) => numDice + (gang.force + gang.control), sum2);

    // calculate the total support of sites that are currently influenced
    // by the defending gang, which currently has control of this sector
    const totalSupport = sector.sites.reduce((support, site) => {
      if (site.isInfulenced) {
        return (support += site.support);
      }
      return support;
    }, sum3);

    return challengingControl - sector.income - defendingControl - totalSupport;
  }

  static combat () {
    return true;
  }

  static heal (gang) {
    return Rules.choose(4 + gang.heal).length;
  }

  static hide () {

  }

  static influence (gangs) {
    const sum = 0;
    const totalDice = gangs.reduce((numDice, gang) => (numDice += gang.force + gang.influence), sum);
    return Rules.choose(totalDice).length;
  }

  static move () {

  }

  static none () {

  }

  static research (gang) {
    return Rules.choose(gang.force + gang.research, 6).length;
  }

  static snitch (site) {
    return site.tolerance - 3 || 0;
  }

  static choose (numberOfDice, successValue = 5) {
    return Dice.shaker(numberOfDice).rolls.filter(Rules.success, successValue);
  }

  static success (value, successValue) {
    return value >= successValue;
  }
}
