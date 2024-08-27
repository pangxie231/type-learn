// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]


// ============= Your Code Here =============
type LengthOfString<S extends string, T extends any[] = []> = S extends `${infer A}${infer Args}` ? LengthOfString<Args, [A, ...T]> : T['length']
// type Test<S extends string> =  S extends `${infer A}${infer B}` ? true : false
// var a: Test<'a'>
