export type IsEqual<A, B> = 
(<T>() => T extends A ? 1 : 2) extends <S>() => S extends B ? 1 : 2 
    ? true 
    : false;
