// import { EmailArray } from './EmailArray';

/**
 * Email regexp with nordic countries in mind
 *
 * It does not deal with comments in the email
 *
 * Based on the regexp from MDN found at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/listOfemails/email
 *
 * Expanded upon based on https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489
 */

export const EmailExp: RegExp = /^[a-zA-ZæøåÆØÅ0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9](?:[a-zA-ZæøåÆØÅ0-9-]{0,61}[a-zA-ZæøåÆØÅ0-9])?(?:\.[a-zA-ZæøåÆØÅ0-9](?:[a-zA-ZæøåÆØÅ0-9-]{0,61}[a-zA-ZæøåÆØÅ0-9])?)*$/;

export function EmailValidation(
  pattern: RegExp,
  emailInput: string | string[],
) {
  console.info('The input:' + emailInput);
  /** Declare utility arrays and booleans */
  let ValidEmails: string[] = [];
  let InvalidEmails: string[] = [];
  let inputIsList: Boolean = false;
  let isValid: Boolean = false;

  /** Pattern checking is a boolean action */
  let patternExecution: Boolean;

  /** If the input's an array */
  if (typeof emailInput != 'string') {
    console.info('Input is array');
    inputIsList = true;
    let listOfEmails: string[] = emailInput;
    listOfEmails.map(emailInput => {
      patternExecution = pattern.test(emailInput);
      if (patternExecution) {
        ValidEmails.push(emailInput);
        isValid = true;
      } else {
        InvalidEmails.push(emailInput);
        isValid = false;
      }
    });
  }
  /** If the input's a string */
  if (typeof emailInput == 'string') {
    console.info('Input is string');
    inputIsList = false;
    /**
     * Check the input literally,
     * otherwise type checking says it also can be an array.
     */
    let email: string = `${emailInput}`;
    patternExecution = pattern.test(email);

    if (!patternExecution) {
      InvalidEmails.push(email);
      isValid = false;
      console.info(`The invalid email:\n ${InvalidEmails}`);
    } else {
      ValidEmails.push(email);
      isValid = true;
      console.info(`The valid email:\n ${ValidEmails}`);
    }
  }
  if (inputIsList) {
    console.group('The valid emails:\n', ValidEmails);
    console.group('The invalid emails:\n', InvalidEmails);
  }
  return isValid;
}

// console.info(EmailValidation(EmailExp, EmailArray));
