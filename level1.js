import test from 'tape'
import { map, filter, reduce, compose } from 'nanofp'

export default function() {
  /* Level 1 */
  const ex1 = 'use map to double each value and return'
  const exercise1 = _ => {
    const numbers = [1, 2, 4, 8, 16, 32]
    const square = n => n * 2

    return map(square, numbers) // return answer here
  }

  const ex2 = 'use filter to only return even numbers'
  const exercise2 = _ => {
    const numbers = [1, 2, 3, 4, 5, 6]
    const even = n => n % 2 === 0

    return filter(even, numbers) // return answer here
  }

  const ex3 = 'use reduce to sum the numbers'
  const exercise3 = _ => {
    const numbers = [1, 2, 3, 4, 5, 6]
    const sum = (n1, n2) => n1 + n2

    return reduce(sum, 0, numbers) // return answer here
  }

  const ex4 = `use compose to run the following three commands

1. map over the numbers and square each number
2. use filter keep numbers divisible by 8
3. use reduce to count the resulting numbers
`
  const exercise4 = _ => {
    const numbers = [1, 2, 4, 8, 16, 32]
    const square = n => n * 2
    const divisibleBy8 = n => n % 8 === 0
    const getNum = n => 1
    const sum = (n1, n2) => n1 + n2
    const makeOne = n => (n = 1)

    return compose(
      reduce(sum, 0),
      map(makeOne),
      filter(divisibleBy8),
      map(square)
    )(numbers)
  }

  /* tests to validate exercises go here */
  test('Level 1', assert => {
    assert.plan(4)
    assert.same(exercise1(), [2, 4, 8, 16, 32, 64], ex1)
    assert.same(exercise2(), [2, 4, 6], ex2)

    assert.same(exercise3(), 21, ex3)

    assert.same(exercise4(), 4, ex4)
  })
}
