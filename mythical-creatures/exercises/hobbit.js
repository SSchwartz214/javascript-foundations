class Hobbit {
  constructor(name, age = 0) {
    this.name = name;
    this.disposition = "homebody"
    this.age = age;
    this.adult = false
    this.old = false
    this.isShort = true
    if (this.name == "Frodo") {
       this.hasRing = true
    } else {this.hasRing = false}
  }

  celebrateBirthday() {
    this.age += 1;

    this.isAdult()
  }

  isAdult() {
    if (this.age >= 101) {
      this.old = true
    }
    else if (this.age <= 32) {
      this.adult = false
    } else if (this.age >= 33) {
      this.adult = true
    }
  }
}
module.exports = Hobbit;