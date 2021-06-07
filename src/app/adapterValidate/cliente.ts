import { EmailValidator } from "@angular/forms";
import { EmailValidatorAdapter } from "./validations/email-validator-adater";
import { EmailValidateProtocol } from "./validations/email-validator-protocol";

function validaEmail(emailValidator: EmailValidateProtocol, email: string): void{
    if(emailValidator.isEmail(email)){
        console.log('Email válido')
    }else{
        console.log('Email inválido')
    }

}
validaEmail(new EmailValidatorAdapter(), 'mq@gmail.com');