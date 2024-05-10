// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T

// T extends 'a'
// 如果T是一个联合类型，那么会拿T的每一项去运行extends,返回的值组成联合类型
var a: MyExclude<'a' | 'b' | 'c', 'a'>

