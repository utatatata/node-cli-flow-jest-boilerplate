/* @noflow */
import type { GreetOption } from '../src/greetCmd'
import greetCmd from '../src/greetCmd'

describe('greetCmd', () => {
  test(`greetCmd({ goodEvening: null, yourName: null }) should be 'Hello!'`, () => {
    const option: GreetOption = { yourName: null, goodEvening: null }
    expect(greetCmd(option)).toBe('Hello!')
  })
  test(`greetCmd({ goodEvening: null, yourName: 'Node CLI' }) should be 'Hello, Node CLI!'`, () => {
    const option: GreetOption = { goodEvening: null, yourName: 'Node CLI' }
    expect(greetCmd(option)).toBe('Hello, Node CLI!')
  })
  test(`greetCmd({ goodEvening: true, yourName: null }) should be 'Good Evening!'`, () => {
    const option: GreetOption = { goodEvening: true, yourName: null }
    expect(greetCmd(option)).toBe('Good Evening!')
  })
  test(`greetCmd({ goodEvening: true, yourName: 'Node CLI' }) should be 'Good Evening, Node CLI!'`, () => {
    const option: GreetOption = { goodEvening: true, yourName: 'Node CLI' }
    expect(greetCmd(option)).toBe('Good Evening, Node CLI!')
  })
})
