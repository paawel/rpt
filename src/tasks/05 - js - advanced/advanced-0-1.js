// Вывести строчку: "My name is Ivan"

class Citizen {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayName() {
    return "My name is " + this.name;
  }
}

class Programmer extends Citizen {
  skills: string[];
  constructor(skills: string[], name: string) {
    this.skills = skills;
  }

  getSkills() {
    return this.skills;
  }
}

let progger = new Programmer();

console.log(progger.sayName());
