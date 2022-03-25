type Point = { "1": number; "2": number };
type P = keyof Point;

type A = P extends "1" | "2" ? true : false;
type B = "1" | "2" extends P ? true : false;

// The keyof operator takes an object type and produces a string or numeric literal union of its keys.
// 证明字符串以及数字字面量，但是数字不行

type Arrayish = { 
    [p: symbol]: boolean };
type C = keyof Arrayish;
// JavaScript object keys are always coerced to a string, 
// so obj[0] is always the same as obj["0"].