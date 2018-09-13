/* @noflow */
import type { GreetOption } from '../src/greetCmd'
import greetCmd from '../src/greetCmd'

describe('greetCmd', () => {
  it(`greetCmd({}) should be 'Hello!'`, () => {
    const option: GreetOption = { yourName: null, goodEvening: null }
    expect(greetCmd(option)).toBe('Hello!')
  })
  it(`greetCmd({ yourName: 'Node CLI' }) should be 'Hello, Node CLI!'`, () => {
    const option: GreetOption = { yourName: 'Node CLI', goodEvening: null }
    expect(greetCmd(option)).toBe('Hello, Node CLI!')
  })
  it(`greetCmd({ goodEvening: true }) should be 'Good Evening!'`, () => {
    const option: GreetOption = { yourName: null, goodEvening: true }
    expect(greetCmd(option)).toBe('Good Evening!')
  })
  it(`greetCmd({ goodEvening: true, yourName: 'Node CLI' }) should be 'Good Evening, Node CLI!'`, () => {
    const option: GreetOption = { yourName: 'Node CLI', goodEvening: true }
    expect(greetCmd(option)).toBe('Good Evening, Node CLI!')
  })
})
