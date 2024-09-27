// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]


// ============= Your Code Here =============
type TupleToNestedObject<T, U> = T extends [infer A, ...infer Rest] ? Record<A & PropertyKey, TupleToNestedObject<Rest, U>> : U

// 递归，每次返回一个对象
var a: TupleToNestedObject<['a', 'b'], number>
// a.a.b