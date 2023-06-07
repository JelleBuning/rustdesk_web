import 'package:encrypt/encrypt.dart';

String? decrypt(String? plainText) {
  if(plainText == null) return null;
  final key = Key.fromBase64('lIQD4tFSxFODSA0KpMHdDg==');
  final iv = IV.fromBase64('OqjwaGQtydlC9k4qUdx1iA==');

  final encrypter = Encrypter(AES(key, mode: AESMode.cbc, padding: 'PKCS7'));
  final decrypted = encrypter.decrypt(Encrypted.from64(plainText), iv: iv);

  return decrypted;
}