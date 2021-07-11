enum UserRole {

}

interface IUserNewData {
  newName: string;
  newAge: number;
}

class Person {
  constructor(
    public name: string,
    protected age: number
  ) { }

  setData(newData: IUserNewData) {
    this.age = newData.newAge;
    this.name = newData.newName;
  }

  getAge() {
    this.age;
  }
}

const ivan = new Person('Ivan', 30);

ivan.setData({ newAge: 20, newName: 'Pesho' });


function identity<T>(arg: T): T {
  return arg;
}

const value = 1;
const test = identity(value);
let str = 'sdsada';
const test2 = identity(str);