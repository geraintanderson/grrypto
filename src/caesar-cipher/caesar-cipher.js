class CaesarCipher {

  constructor (config) {
    this.characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    // Define an array of the top 100 words used in the English Language
    this.wordList = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us']

    // this._shiftChar = this._shiftChar.bind(this)

    if (config.hasOwnProperty('key')) {
      this.setKey(config.key)
    }
  }

  setKey (newKey) {
    if (typeof newKey === 'number') {
      this.key = parseInt(newKey) % this.characters.length
    } else {
      throw new Error('The key must be a number')
    }
  }

  encrypt (plaintext) {
    if (typeof plaintext !== 'string') {
      throw new Error('The plaintext must be a string')
    }

    const encrypter = this._charShifter(this.characters, this.key, 1)
    return plaintext
    .split('')
    .map(encrypter)
    .join('')
  }

  decrypt (ciphertext) {
    if (typeof ciphertext !== 'string') {
      throw new Error('The ciphertext must be a string')
    }

    const decrypter = this._charShifter(this.characters, this.key, -1)
    return ciphertext
    .split('')
    .map(decrypter)
    .join('')
  }

  crack (ciphertext) {
    let maxCounter = 0;
    return this.characters.reduce((results, current, index) => {
      const decrypter = this._charShifter(this.characters, index, -1)
      let counter = 0

      const decrypted = ciphertext
      .split('')
      .map(decrypter)
      .join('')

      decrypted
      .toLowerCase()
      .split(' ')
      .forEach(word => this.wordList.includes(word) ? counter++ : false)

      console.log('--- counter')
      console.log(counter)
      console.log(decrypted)
      results.fa[index] = counter
      if (maxCounter < counter) {
        results.key = index
        results.decrypted = decrypted
      }

      console.log('---------------')
      console.log(results)
      return results
    }, {fa: {}})
  }

  _charShifter (charset, key, direction) {
    // Direction must be 1 for forwards (encrypt) or -1 for backwards (decrypt)
    return function (char) {
      const lowerCase = char === char.toLowerCase()
      const charIndex = charset.indexOf(char.toLowerCase())
      let encryptedChar
      if (charIndex > -1) {
        encryptedChar = charset[(charset.length + charIndex + key * direction) % charset.length]
      } else {
         encryptedChar = char
      }

      if (lowerCase) {
        return encryptedChar
      } else {
        return encryptedChar.toUpperCase()
      }
    }
  }
}

export default CaesarCipher;
