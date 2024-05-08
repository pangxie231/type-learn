// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// keyof可以获取对象的key类型，获取的是一个联合类型
// 而联合类型又可以用来 in 循环

const obj = {a: '1', b: 2}
type keys = keyof typeof obj
// 可以看到string也可以in
// 
type MyRecord<U extends string> = {
  [P in U]: string
}

var a: keys;
var b: MyRecord<keys>