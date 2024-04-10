// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
]

// ============= Your Code Here =============
type NumberToArray<
  T extends number,
  U extends any[] = []
> = T extends U['length'] ? U : NumberToArray<T, [...U, any]>
type MinusOne<T extends number> = NumberToArray<T> extends [infer _, ...infer Rest] ? Rest['length'] : T

var a: NumberToArray<>
// type Test<T, U extends any[]> = T extends U['length'] ? true : false
// var b:Test<4, [any,any,any,any, any]>
