const EmailArray: string[] = [
  // Valid
  'joe.user%mitvma.bitnet@cuny.edu',
  '!one!two!three!exampleUser@example.net',
  '/G=Joe/S=Blow/O=MMNY/A=ATT/C=US@gateway.example.com',
  'joe.user+w3c@example.com',
  'ææøæøøpåæÆÅØÆØøæøåøÆØÅÆØØÅæ@gÆÅØmail.coØÅÆæøæådm',
  'foo=modulw@efefa.sdf',
  'foo@xn--maana-pta.com',

  'email@example.com',
  'firstname.lastname@example.com',
  'email@subdomain.example.com',
  'firstname+lastname@example.com',
  'email@123.123.123.123',
  'email@[123.123.123.123]',
  '"email"@example.com',
  '1234567890@example.com',
  'email@example-one.com',
  '_______@example.com',
  'email@example.name',
  'email@example.museum',
  'email@example.co.jp',
  'firstname-lastname@example.com',
  // Unusual valid emails
  // Comments can't handled by a single regexp - See http://www.ex-parrot.com/pdw/Mail-RFC822-Address.html
  'much."more unusual"@example.com',
  'very.unusual."@".unusual.com@example.com',
  'very."(),:;<>[]".VERY."very@\\\\\\ "very".unusual@strange.example.com',

  // Invalid
  'plainaddress',
  '#@%^%#$@#$@#.com',
  '@example.com',
  'Joe Smith <email@example.com>',
  'email.example.com',
  'email@example@example.com',
  '.email@example.com',
  'email.@example.com',
  'email..email@example.com',
  'あいうえお@example.com',
  'email@example.com (Joe Smith)',
  'email@example',
  'email@-example.com',
  'email@example.web',
  'email@111.222.333.44444',
  'email@example..com',
  'Abc..123@example.com',

  '"(),:;<>[]@example.com',
  'just"not"right@example.com',
  'this is"really"not\\\\allowed@example.com',
];

/**
 * Email regexp with nordic countries in mind
 *
 * Based on the regexp from MDN found at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
 *
 * Expanded upon based on https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489
 */
const EmailExp: RegExp = /^[a-zA-ZæøåÆØÅ0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9](?:[a-zA-ZæøåÆØÅ0-9-]{0,61}[a-zA-ZæøåÆØÅ0-9])?(?:\.[a-zA-ZæøåÆØÅ0-9](?:[a-zA-ZæøåÆØÅ0-9-]{0,61}[a-zA-ZæøåÆØÅ0-9])?)*$/;

interface EmailExp {
  EmailExp;
}

function EmailRegExp(pattern: RegExp, emailInput?: string): Boolean {
  let ValidEmails: string[] = [];
  let InvalidEmails: string[] = [];

  EmailArray.map(emailInput => {
    const expressionExecution: Boolean = pattern.test(emailInput);
    if (expressionExecution) {
      ValidEmails.push(emailInput);
    } else {
      InvalidEmails.push(emailInput);
    }
  });
  if (ValidEmails === []) {
    console.group(`These emails are invalid:\n `, InvalidEmails);
    return false;
  } else if (ValidEmails != []) {
    console.group(`These emails are valid:\n `, ValidEmails);
    console.group(`\n\nAnd These emails are invalid:\n `, InvalidEmails);

    return true;
  } else {
    console.error('ValidEmails is neither empty or an index.');
  }
}

// console.group('Valid emails:\n', EmailArray);
console.info(EmailRegExp(EmailExp));
