import { CaesarCipher } from '../../src/index.js'

describe('CaesarCipher', function () {
  beforeEach(function () {
  })

  it('Should initialise the caesar cipher with the supplied key', function () {
    var caesarCipher1 = new CaesarCipher({
      key: 1
    })
    var caesarCipher25 = new CaesarCipher({
      key: 25
    })

    expect(caesarCipher1.key).toBe(1)
    expect(caesarCipher25.key).toBe(25)
  })

  it('Should not allow the key to exceed the maximum number of available characters', function () {
    var caesarCipher26 = new CaesarCipher({
      key: 0
    })
    var caesarCipher27 = new CaesarCipher({
      key: 27
    })
    var caesarCipher57 = new CaesarCipher({
      key: 57
    })

    expect(caesarCipher26.key).toBe(0)
    expect(caesarCipher27.key).toBe(1)
    expect(caesarCipher57.key).toBe(5)
  })
})
