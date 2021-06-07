import {} from 'validator/lib/isEmail';
import { EmailValidateProtocol } from "./email-validator-protocol";

export class EmailValidatorAdapter implements EmailValidateProtocol {
    isEmail(value: string): boolean{
        return this.isEmail(value);
    }

}