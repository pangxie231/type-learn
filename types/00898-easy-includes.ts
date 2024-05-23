// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<
    Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>
  >,
  Expect<
    Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>
]

// ============= Your Code Here =============
// var b: Readonly
// type MyEqual<T, U> = T extends U ? U extends T ? true : false : false;

// 接受两个类型
// 可以理解为一个类型，去extendsA1和A2，
// type MyEqual <A1,A2> = (<T>()=> T extends A1 ? 1 : 2) extends 1 ? 1 : 2

// type Includes<T extends readonly any[], U> = T extends [infer A, ...infer Rest]
//   ? Equal<U, A> extends true
//     ? true
//     : Includes<Rest, U>
//   : false
type BooleanToStr<T> = [T] extends [boolean] ? boolean : [T] extends [true] ? `${true}` : [T] extends [false] ? `${false}` : T
type Includes<T extends readonly any[], U> = any
// [BooleanToStr<U>]

// extends [true] ? true : false


// [BooleanToStr<U>] extends true ? true : false
// extends true ? true : false
// extends true ? true : false

// var a: Includes<[{}], { a: 'A' }>

// a['false']

type Tup = ['Kars', 'Esidisi', 'Wamuu', 'Santana']
type A = { a: string } extends { readonly a: string } ? true : false

// type TestEqual = ((a: { readonly a: string }) => string) extends (a: {
//   a: string
// }) => {}
//   ? true
//   : false
// var a: TestEqual

// a
