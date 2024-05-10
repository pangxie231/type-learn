// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>


// ============= Your Code Here =============
type Thenable<T> = {
  then:(onfulfilled: ()=> void)=> Thenable<T>
}
type PromiseLike<T> = Promise<T> | Thenable<T>
type UnWrapPromiseLike<T> = T extends PromiseLike<infer A> ? UnWrapPromiseLike<A> : T
// 本来可以MyAwaited一步到位的，但是T有个限制，必须是用Promise包裹起来
// 所以我选择重新声明一个类型类型递归解构Promise
type MyAwaited<T extends PromiseLike<any>> = UnWrapPromiseLike<T>



// T extends U, 当U为联合类型时，也是执行 T extends U中的每一个联合类型，只要有一个符合，断言就为true
// type AorB = 'a' | 'b'
// type IsX<T> = T extends AorB ? true : false
// var a: IsX<'c'>



