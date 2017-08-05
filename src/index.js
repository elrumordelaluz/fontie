import { sync } from 'which'
import { spawn } from 'child_process'

// config from https://github.com/FontCustom/fontcustom/blob/master/lib/fontcustom/templates/fontcustom.yml
const fontie = (
  {
    config,
    fontName = 'custom-font',
    cssSelector = '.i-{{glyph}}',
    noHash = false,
    base64 = false,
    force = true,
    debug = false,
    quiet = true,
    copyright,
    input = 'input',
    output = 'output',
  } = {}
) => {
  console.log('aaa');
  return new Promise((resolve, reject) => {
    const path = sync('fontcustom')

    if (path) {
      const p = spawn(path, [
        `compile`, 
        input, 
        `--font-name=${fontName}`,
        `--output=${output}`,
        [
          ...config ? [`--config=${config}`] : []
        ]
      ])
      p.stdout.pipe(process.stdout)
      p.stderr.pipe(process.stderr)
      p.on('exit', err => {
        if (err) {
          reject('An error occurred converting svgs to font icon')
        }
        resolve()
      })
    } else {
      console.log('jkhkj')
      reject('Should be installed fontcustom')
    }
  })
}

export default fontie
