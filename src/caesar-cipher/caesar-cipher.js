class CaesarCipher {

  constructor (config) {
    if (config.hasOwnProperty('key')) {
      this.setKey(config.key)
    }
  }

  setKey (newKey) {
    if (typeof newKey === 'number') {
      this.key = parseInt(newKey) % 26
    } else {
      throw new Error('The key must be a number')
    }
  }
}

export default CaesarCipher;
