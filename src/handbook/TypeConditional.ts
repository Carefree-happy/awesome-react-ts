type A1 = 1 | 2 | 3;
type A2 = 2 | 3;
type A3 = A2 extends A1 ? true : false;
// 基础变量A2是A1的子集吗?
type A4 = { a: 12, b: "sds", c: true }
type A5 = { a: 12, b: "sds" };
type A6 = A4 extends A5 ? true : false;
// 类变量A4是A5的超级吗？
// 有没有一种理念？
// 基本情况下：找比自己大的，高级情况下：找比自己小的？
// 菜园里的菜品，谁的多？我能不能成为一个有你那么多菜品的人。

// When the type on the left of the extends is assignable to the one on the right
// 原文理解：当左边的类型可赋值给右边的类型

type B<T> = T extends never ? 1 : 2
type test1 = B<never>
// 这个是never
type B2<T> = [T] extends [never] ? 1 : 2
type test2 = B2<never>
// 这个是 1

// 条件类型遇到 never 会直接返回 never，遇到 any 会返回 trueType 和 falseType 的联合类型。