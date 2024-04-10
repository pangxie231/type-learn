// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<
    Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<
    Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
]

type Includes<T extends readonly any[], U> = T extends [infer A, ...infer Rest]
  ? [A] extends [U]
    ? true
    : Includes<Rest, U>
  : false

type Falsy = [0, '', undefined, false, [], {}, undefined, null]
// ============= Your Code Here =============
// type AnyOf<T extends readonly any[], U extends any[] = Falsy> = T extends [
//   infer A,
//   ...infer Rest
// ]
//   ? [Includes<U, A>] extends [true]
//     ? AnyOf<Rest, U>
//     : true
//   : false

type AnyOf<T extends any[]> = T[number] extends
  | 0
  | false
  | []
  | { [key: string]: never }
  | null
  | undefined
  | ''
  ? false
  : true
