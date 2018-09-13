/* @flow */

export type GreetOption = {
  yourName: ?string,
  goodEvening: ?boolean,
}

export default (options: GreetOption) => {
  const template = (str: string): string =>
    options.goodEvening ? `Good Evening${str}!` : `Hello${str}!`

  const greeting = options.yourName
    ? template(`, ${options.yourName}`)
    : template('')

  return greeting
}
