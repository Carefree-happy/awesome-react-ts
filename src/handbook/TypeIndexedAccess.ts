type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type I1 = Person["age" | "name"];

type I2 = Person[keyof Person];

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: true },
];

type ArrayNumber = typeof MyArray[number];

type AgeNum = typeof MyArray[number]["age"];

type AgeNum1 = number;
// Or
type AgeNum2 = Person["age"];

type AgeNum3 = number;
