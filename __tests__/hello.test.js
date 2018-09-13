/* @flow */
import { hello } from '../src/hello'

describe('hello', () => {
  it(`hello('Jest') to be 'Hello, Jest!'`, () => {
    expect(hello('Jest')).toBe('Hello, Jest!')
  })
})
