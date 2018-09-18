# grrypto

Cryptographic functions implemented in JavaScript

# Security

Please don't use this library for production applications or sensitive data.

## Caesar Cipher

A Caesar Cipher instance can be initialised using the new keyword and passing in a config option. The key must be a number. If it is not an integer it will be converted to an integer. Any non-Error types will throw an error.

### Initialisation

The Caesar Cipher is implemented as a class and should be initialised with an encryption key. It must first be imported.

`import { CaesarCipher } from '../../src/index.js'`
`var caesarCipher = new CaesarCipher({ key: 1 })`

The encryption key can be changed at any time

`caesarCipher.setKey(2)`

### Encryption

The encrypt function returns the ciphertext when called with the plaintext as a parameter.

`const ciphertext = caesarCipher.encrypt('Hello, World!')`

### Encryption

The decrypt function returns the plaintext when called with the ciphertext as a parameter.

`const plaintext = caesarCipher.decrypt(ciphertext)`

# Tests

To run the tests, open jasmine/SpecRunner.html in a web browser.
