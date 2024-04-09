// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>
]

// ============= Your Code Here =============
// 数字转为元祖类型
// T为传入的数字，U为生成的元祖
// 每次为U添加一个any类型，使length加1
// 当U的length超出T时，就可以返回U了，否则继续生成
type Tuple<T extends number, U extends any[] = []> = U['length'] extends T ? U : Tuple<T, [...U, any]>
type Substract<T extends number, U extends number> = Tuple<T> extends [...Tuple<U>, ...infer Rest] ? Rest['length'] : never

type Pop<T extends any[]> = T extends [...infer Rest, infer _] ? Rest : []
// type Pop<T extends any[]> = {
//   [P in keyof T as P extends `${Substract<T['length'], 1>}` ? never : P]: T[P]
// }
// var a:Pop<[3,2,1]>

// var b:Substract<4,1>
// b

