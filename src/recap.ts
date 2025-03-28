const myName = 'Nicolas';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 13);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(myAge, myName);
nicolas.getSummary();
