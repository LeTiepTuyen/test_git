let userName = "John";
let userName2: String = "John";


console.log(typeof userName); // string
console.log(typeof userName2); // string



const names: string[] = [];
names.push("Dylan"); 

console.log(names[0]); // ["Dylan"]
console.log(names)


const listName: number[] = [];
// list of methods for arrays in TypeScript:
// https://www.w3schools.com/js/js_array_methods.asp
listName.push(1);
listName.push(2);

console.log(listName[0]); // 1
console.log(listName[1]); // 2

const listName2: Array<number> = [];
listName2.push(1);
listName2.push(2);

console.log(listName2[0]); // 1
console.log(listName2[1]); // 2


// Tuple

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];


// Enum

enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); // 2


//TypeScript Object Types : 

// Object Types
let user: { name: string, age: number, postcode?: String, readonly phoneNumber: String } = { // email?: string; // Thuộc tính không bắt buộc
    name: "John",
    age: 30,
    phoneNumber: "0123456789"
    // address: "New York" //Property 'address' does not exist on type '{ name: string; age: number; }'. 
};

console.log(user.name); // John
// user.phoneNumber = "9876543210"; // Cannot assign to 'phoneNumber' because it is a read-only property.

// user.name = 32; //Type '32' is not assignable to type 'string'.'

// how to add new property to object in TypeScript:


class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());
// console.log(person.name); // Property 'name' is private and only accessible within class 'Person'.


const sum =  (a: number, b: number): number => a + b;

const multiply: (a: number, b: number) => number = (a, b) => a * b;  // Function Types
// the multiply function above is equivalent to:
// you can separate the function signature from the function implementation:
// 1) function types are like object types, but for functions:
type Subtract = (num1: number, num2: number) => number;
// 2) you can use the function type to define a function:
const subtract: Subtract = (num1, num2) => num1 - num2;

console.log(sum(1, 2)); // 3
console.log(multiply(3, 2)); // 6
console.log(subtract(3, 2)); // 1


const functionTest = <T = string>  (a: T) => a;

console.log(functionTest);
console.log(functionTest(1));
console.log(functionTest("Hello"));




// Utities Types in Generics:
type User = {
  id: number;
  name: string;
};


// const nontPartialUser: User = {name: "Tuyen" }; // Property 'id' is missing in type '{ name: string; }' but required in type 'User' because it is required in type 'User'./*  */
const partialUser: Partial<User> = { name: "Tuyen" }; // Partial Type so we can create object without id



type User2 = {
  id: number;
  name: string;
};

const user2: Readonly<User2> = { id: 1, name: "Tuyen" };
// user2.name = "Hoang"; // Error: Thuộc tính chỉ đọc
// user.id = 2; // Error: Thuộc tính chỉ đọc


class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const book = new Book("TypeScript Guide");
// book.title = "Another Title"; // Error: Cannot assign to 'title' because it is a read-only property


const logIdentity = <Type extends { length: number }>(value: Type) => {
  console.log(value.length);
  return value;
};

logIdentity("Hello TypeScript"); // Chuỗi (string) trong JavaScript/TypeScript có thuộc tính length và thuộc tính này là kiểu number.

logIdentity([1, 2, 3, 4]); //Mảng (Array) cũng có thuộc tính length và thuộc tính này là kiểu number.

logIdentity({ length: 42, name: "Custom Object" }); // { length: 42, name: "Custom Object" } truyền vào 1 object có property length

// logIdentity2(123); // Error: Argument of type '123' is not assignable to parameter of type '{ length: number; }'.

// generic contraints with interfaces:

interface Lengthwise {
  length: number;
}

const logIdentity2 = <Type extends Lengthwise>(value: Type) => {
  console.log(value.length);
  return value;
};

logIdentity2("Hello TypeScript");
logIdentity2([1, 2, 3, 4]);

// logIdentity2(123);