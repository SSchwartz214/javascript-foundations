class Medusa {
  constructor(name, statues = []) {
    this.name = name;
    this.statues = statues;
  }

  stare(victim) {
    victim.stone();

    if (this.statues.length < 3) {
      this.statues.push(victim)
    } else {
      var freedVictim = this.statues.shift();
      freedVictim.unstone();
      this.statues.push(victim)
    }
  }
}


module.exports = Medusa;