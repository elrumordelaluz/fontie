import { expect } from 'chai'
import fontie from './index'

describe('fontie', () => {
  it('works', () => {
    fontie({
      config: __dirname + '/test-config/config.yml',
      input: __dirname + '/test-input',
      output: __dirname + '/test-output',
    })
  })
})
