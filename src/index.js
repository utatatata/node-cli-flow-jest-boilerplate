/* @flow */
import program from 'commander'

import greetCmd from './greetCmd'

program.version('v0.1.0', '-v, --version')

program
  .command('greet')
  .description('display greeting')
  .option('-n, --your-name <your-name>', 'the name that I greet')
  .option('-e, --good-evening', 'a greeting in the evening')
  .action(options => {
    const greeting = greetCmd(options)
    console.log(greeting)
  })

program.parse(process.argv)

// display help if no arguments
if (process.argv.length < 3) {
  program.help()
}
