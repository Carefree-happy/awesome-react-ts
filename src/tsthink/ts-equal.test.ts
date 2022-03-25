import { IsEqual } from './ts-equal';
import { Alike, Expect } from '@type-challenges/utils';

type cases = [
    Expect<Alike<IsEqual<12, 12>, true>>,
    Expect<Alike<IsEqual<1, 2>, false>>,
    Expect<Alike<IsEqual<A, B>, false>>,
    Expect<Alike<IsEqual<A1, B1>, true>>,
    Expect<Alike<IsEqual<A2, B2>, true>>
]

interface A {
    id: string;
}

interface B {
    a: string;
}

interface A1 {
    id: string;
    name: string;
}

interface B1 {
    id: string;
    name: string;
}

type A2 = string;
type B2 = string;
    