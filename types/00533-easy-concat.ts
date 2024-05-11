// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tuple = [1] as const

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

// @ts-expect-error
type error = Concat<null, undefined>


// ============= Your Code Here =============
type Concat<T extends readonly any[], U extends readonly any[]> =[...T, ...U]
// 不要什么都用递归 ，要先理解提议，Concat用Spread就行了，只需要打三一层，而不是无限层
// 所以直接有打散完美解决
// Concat
var a:Concat<typeof tuple, typeof tuple>