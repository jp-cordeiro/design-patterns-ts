export interface EmailValidatorProtocol {
  verifyEmail: EmailValidatorFnProtocol;
}

export interface EmailValidatorFnProtocol {
  (value: string): boolean;
}
