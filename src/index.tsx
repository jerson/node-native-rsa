import ffi from 'ffi';

const library = ffi.Library(__dirname + '/../native/rsa.so', {
  Hash: ['string', ['string', 'string']],
  DecryptOAEP: ['string', ['string', 'string', 'string', 'string', 'string']],
  VerifyPSS: ['string', ['string', 'string', 'string', 'string', 'string']],
});

export interface KeyPair {
  publicKey: string;
  privateKey: string;
}
export declare type RSAHash =
  | 'md5'
  | 'sha1'
  | 'sha224'
  | 'sha256'
  | 'sha384'
  | 'sha512';

export declare type RSABits = 512 | 1024 | 2048 | 4096;

export default class NativeRSA {
  static async hash(message: string, name: RSAHash): Promise<string> {
    return library.Hash(message, name);
  }
  static async decryptOAEP(
    message: string,
    label: string,
    hashName: RSAHash,
    pkcs12: string,
    passphrase: string
  ): Promise<string> {
    return library.DecryptOAEP(message, label, hashName, pkcs12, passphrase);
  }
  static async verifyPSS(
    signature: string,
    message: string,
    hashName: RSAHash,
    pkcs12: string,
    passphrase: string
  ): Promise<boolean> {
    return !!library.VerifyPSS(
      signature,
      message,
      hashName,
      pkcs12,
      passphrase
    );
  }
}
