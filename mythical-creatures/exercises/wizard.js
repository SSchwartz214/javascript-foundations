class Wizard {
  constructor({name, bearded = true, isRested = true}) {
    this.name = name
    this.bearded = bearded
    // this.bearded = data.bearded === undefined ? true : data.bearded;
    this.isRested = isRested
    this.castCount = 0
  }

  incantation(spell) {
    return spell.toUpperCase();
  }

  cast() {
    this.castCount += 1;
    if (this.castCount <= 2)
      return 'MAGIC BULLET'
    else {
      this.isRested = false
      return 'I SHALL NOT CAST!'
    }
  }

  test()
}

module.exports = Wizard