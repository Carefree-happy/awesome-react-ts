let s = "hello";
let n: typeof s;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f() {
    return { x: 10, y: 3 };
}

const g = () => {
    return { x: 10, y: 3 };
}

type P = ReturnType<typeof g>;

type T1 = typeof g extends typeof f ? true : false;
type T2 = typeof f extends typeof g ? true : false;
