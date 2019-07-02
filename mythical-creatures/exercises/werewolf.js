class Wereworlf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.eatenVictims = [];
  }

  change() { 
    if (this.human === true) {
      this.wereWolfForm();
    } else if (this.wolf === true) {
      this.humanForm();
    }
  }

  humanForm() {
    this.human = true;
    this.wolf = false;
    this.hungry = false
  }

  wereWolfForm() {
    this.human = false;
    this.wolf = true;
    this.hungry = true
  }

  eat(victim) {
    if (this.human === false) {
      this.eatenVictims.push(victim);
      victim.alive = false;
      this.humanForm();
    }
  }
}

module.exports = Wereworlf