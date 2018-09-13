import path from 'path'
import program from 'commander'

/* @noflow */
import type { PkgJson } from './getPkgJson'
import getPkgJson from './getPkgJson'
import greetCmd from './greetCmd'

const init = async () => {
  const pkgJson: PkgJson = await getPkgJson(path.join(__dirname, '..'))
  program.version(`v${pkgJson.version}`, '-v, --version')

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
}
init()
