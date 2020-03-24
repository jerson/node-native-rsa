# node-native-rsa

```javascript
import NativeRSA from 'native-rsa'

 const decrypted = await NativeRSA.decryptOAEP(
    message: string,
    label: string,
    hashName: RSAHash,
    pkcs12: string,
    passphrase: string
  ): Promise<string>
 const verified =  await NativeRSA.verifyPSS(
    signature: string,
    message: string,
    hashName: RSAHash,
    pkcs12: string,
    passphrase: string
  ): Promise<boolean> 
```
