// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]


// ============= Your Code Here =============
// type StringToUnion<T extends string, U extends string= ''> = T extends `${infer A}${infer B}` ?  StringToUnion<B, U extends '' ? A : U | A> : U extends '' ? never : U
// type V<T extends any[]> = T['values']
// var a: StringToUnion<'coronavirus'>

type StringToUnion<T extends string> = T extends `${infer A}${infer Rest}` ? A | StringToUnion<Rest> : never
