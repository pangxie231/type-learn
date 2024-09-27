// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
]


// ============= Your Code Here =============
/** 联合类型，如果只有一个undefined，返回undefined，否则返回除undefined之外的 */
// type ExcludeUndefined<U> = [U] extends [undefined] ? undefined : U extends undefined ? never : U
type ObjectEntries<T extends object, K extends keyof T = keyof T> = K extends any ?  [K, T[K] extends undefined ? undefined : Required<T>[K]] : never
// type ObjectEntries<T extends object, K extends keyof T = keyof T> = K extends any ?  T[K] extends undefined ? undefined : Required<T>[K]: never
// type ObjectEntries<T extends object, K extends keyof T  = keyof T> 
//  = K extends K ? [K, T[K] extends undefined ? undefined : Required<T>[K]] : never
// var a: ObjectEntries<{ key?: undefined }>

// 如果一个联合类型只有undefined，那就undefined
// 否则过滤掉undefined，过滤undefined可以用Required
type Test<T> = T extends undefined ? undefined : T
var b: Test<undefined | 'a'>

var a: Partial<Model>

