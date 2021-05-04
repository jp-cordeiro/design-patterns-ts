import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocol } from './email-validator-protocol';

export class EmailValidatorAdapter implements EmailValidatorProtocol {
  verifyEmail(email: string): boolean {
    return isEmail(email);
  }
}
