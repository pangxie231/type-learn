// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const sym1 = Symbol(1)
const sym2 = Symbol(2)
const tupleSymbol = [sym1, sym2] as const
const tupleMix = [1, '2', 3, '4', sym1] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleSymbol>, { [sym1]: typeof sym1; [sym2]: typeof sym2 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4'; [sym1]: typeof sym1 }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>


// ============= Your Code Here =============
type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P
}

type A<T extends readonly any[]> = T[number]
var arr = [ {a: 1}, {a: 2, b: 3} ]
var a: A<typeof arr>

// T[number] T为数组，如果数组项为string，那么T[number]为联合类型
// 如果数组项为对象，那么T[number]为一个对象的值； 如果某个key不是每个对象都有，那么就是可选属性，访问的时候会加上 ?

// PropertyKey为 联合类型string|symbol|number，只有这些属性才能作为对象的key



