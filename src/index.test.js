import { expect } from 'chai'
import fontie from './index'

describe('fontie', () => {
  it('works', () => {
    fontie({
      config: __dirname + '/config.yml',
      input: __dirname + '/input',
    })
      .then(res => {
        expect(res).to.eql('hola')
      })
      .catch(err => console.log(err))
  })
})
