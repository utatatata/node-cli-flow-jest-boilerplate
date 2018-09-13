import fs from 'fs'
import path from 'path'

/* @flow weak */
export type PkgJson = {
  version: string,
}

export default async (rootDir: string): Promise<PkgJson> => {
  const pkgJsonBuffer = await fs.promises.readFile(
    path.join(rootDir, 'package.json')
  )
  return JSON.parse(pkgJsonBuffer.toString())
}
