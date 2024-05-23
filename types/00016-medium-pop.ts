// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>
]

// ============= Your Code Here =============
type Pop<T extends any[]> = T extends [...infer Rest, infer _] ? Rest : T

// ...不仅可以用在后面，也可以用在前面，那我想还可以用在中间
// 比如实现一个Middle，去掉前面和后面的，返回中间的
type Middle<T extends any[]> = T extends [infer A, ...infer Rest, infer B] ? Rest : T

