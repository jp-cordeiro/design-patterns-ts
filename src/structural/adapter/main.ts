import { EmailValidatorAdapter } from './validation/email-validation-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validationEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.verifyEmail(email)) {
    console.log('Email válido (CLASS)');
  } else {
    console.log('Email inválido (CLASS)');
  }
}

function validationEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email válido (FUNCTION)');
  } else {
    console.log('Email inválido (FUNCTION)');
  }
}

const email = 'teste@teste.com';
validationEmailClass(new EmailValidatorAdapter(), email);
validationEmailFn(emailValidatorFnAdapter, email);
