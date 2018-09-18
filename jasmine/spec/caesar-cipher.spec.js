import { CaesarCipher } from '../../src/index.js'

describe('CaesarCipher', function () {
  describe('initialisation', function () {
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

  describe('encrypt', function () {
    it('should encrypt text using the key', function () {
      var caesarCipher = new CaesarCipher({ key: 1 })
      var plaintext = 'Hello, World!'
      var ciphertext = caesarCipher.encrypt(plaintext)
      expect(ciphertext).toBe('Ifmmp, Xpsme!')

      caesarCipher.setKey(10)
      plaintext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor nisl sed maximus eleifend.'
      ciphertext = caesarCipher.encrypt(plaintext)
      expect(ciphertext).toBe('Vybow szcew nyvyb csd kwod, myxcomdodeb knszscmsxq ovsd. Odskw zybddsdyb xscv con wkhswec ovospoxn.')

      caesarCipher.setKey(30)
      plaintext = 'All the world ‘s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.'
      ciphertext = caesarCipher.encrypt(plaintext)
      expect(ciphertext).toBe('Epp xli asvph ‘w e wxeki, erh epp xli qir erh asqir qivipc tpecivw. Xlic lezi xlimv ibmxw erh xlimv irxvergiw; Erh sri qer mr lmw xmqi tpecw qerc tevxw.')
    })
  })

  describe('decrypt', function () {
    it('should decrypt the cipher text using the key', function () {
      var caesarCipher = new CaesarCipher({ key: 1 })
      var ciphertext = 'Ifmmp, Xpsme!'
      var plaintext = caesarCipher.decrypt(ciphertext)
      expect(plaintext).toBe('Hello, World!')

      caesarCipher.setKey(10)
      var ciphertext = 'Vybow szcew nyvyb csd kwod, myxcomdodeb knszscmsxq ovsd. Odskw zybddsdyb xscv con wkhswec ovospoxn.'
      var plaintext = caesarCipher.decrypt(ciphertext)
      expect(plaintext).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor nisl sed maximus eleifend.')

      caesarCipher.setKey(30)
      var ciphertext = 'Epp xli asvph ‘w e wxeki, erh epp xli qir erh asqir qivipc tpecivw. Xlic lezi xlimv ibmxw erh xlimv irxvergiw; Erh sri qer mr lmw xmqi tpecw qerc tevxw.'
      var plaintext = caesarCipher.decrypt(ciphertext)
      expect(plaintext).toBe('All the world ‘s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.')
    })
  })
})
