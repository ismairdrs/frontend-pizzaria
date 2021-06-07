export interface EmailValidateProtocol{
    isEmail: EmailValidatorFnProtocol;
}

export interface EmailValidatorFnProtocol{
    (value: string): boolean;
}