class CaesarCipher {

  constructor (config) {
    this.characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    // Define an array of the top 100 words used in the English Language
    this.wordList = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us']

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
    const ciphertext = plaintext
    .split('')
    .map(char => {
      const lowerCase = char === char.toLowerCase()
      const charIndex = this.characters.indexOf(char.toLowerCase())
      let encryptedChar
      if (charIndex > -1) {
        encryptedChar = this.characters[(charIndex + this.key) % this.characters.length]
      } else {
         encryptedChar = char
      }

      if (lowerCase) {
        return encryptedChar
      } else {
        return encryptedChar.toUpperCase()
      }
    })

    return ciphertext.join('')
  }

  decrypt (ciphertext) {
    if (typeof ciphertext !== 'string') {
      throw new Error('The ciphertext must be a string')
    }
    const plaintext = ciphertext
    .split('')
    .map(char => {
      const lowerCase = char === char.toLowerCase()
      const charIndex = this.characters.indexOf(char.toLowerCase())
      let encryptedChar
      if (charIndex > -1) {
        encryptedChar = this.characters[(this.characters.length + charIndex - this.key) % this.characters.length]
      } else {
         encryptedChar = char
      }

      if (lowerCase) {
        return encryptedChar
      } else {
        return encryptedChar.toUpperCase()
      }
    })

    return plaintext.join('')
  }
}

export default CaesarCipher;
