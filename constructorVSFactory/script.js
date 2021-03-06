function createPerson(name) {
  return {
    name,
    talk() {
      return `I'm ${this.name}`;
    },
  };
}

const me = createPerson("Jakub");
const you = createPerson("Piotr");

me.talk = function () {
  return `Hello, I'm ${this.name}`;
};

const coolProto = {
  talk() {
    return `Hello, I'm ${this.name}`;
  },
};

function Person(name) {
  this.name = name;
}

const ben = new Person("Ben");

Person.prototype.talk = function () {
  return `I'm new talk `;
};

Person.prototype.talk = function () {
  return `Ciao, io sono ${this.name}`;
};

function privateCreatePerson(name) {
  return {
    talk() {
      return `I'm ${name}`;
    },
  };
}

const mePrivate = privateCreatePerson("Jakub");
