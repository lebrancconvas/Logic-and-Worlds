export class Person {
  worldIndex: number;

  constructor(worldIndex: number) {
    this.worldIndex = worldIndex;
  }
};

export class World {
  people: Person[];

  constructor() {
    this.people = [];
  }

};
