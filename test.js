'use strict';

const lib = require('./lib');
const configuration = lib.Configuration;
const controller = lib.MailSendController;

configuration.apiKey = 'api-key';

let body = new lib.Send();

body.from = new lib.From();
body.from.email = 'e-mail-id';
body.from.name = 'Pepipost';
body.subject = 'Pepipost Test Mail from SDK';

body.content = [];
body.content[0] = new lib.Content();
body.content[0].type = lib.TypeEnum.HTML;
body.content[0].value = '<html><body>Hello, Welcome to Pepipost Family.<br>My name is [% name %].<br>my love is sending [% love %]</body> <br></html>';

body.personalizations = [];
body.personalizations[0] = new lib.Personalizations();
body.personalizations[0].attributes = JSON.parse('{"name":"Pepi","love":"Email"}');

body.personalizations[0].attachments = [];
body.personalizations[0].attachments[0] = new lib.Attachments();
body.personalizations[0].attachments[0].content = 'SGVsbG8sIHRoaXMgZmlsZSBpcyBhbiBpbmZvcm1hdGlvbmFsIGZpbGU6OiBTZW5kaW5nIGVtYWlscyB0byB0aGUgaW5ib3ggaXMgd2hhdCB3ZSBkbywgYnV0IHRoYXTigJlzIG5vdCB0aGUgb25seSByZWFzb24gd2h5IGRldmVsb3BlcnMgYW5kIGVudGVycHJpc2VzIGxvdmUgdXMuIFdlIGFyZSB0aGUgb25seSBFU1AgdGhhdCBkb2VzbuKAmXQgY2hhcmdlIGZvciBlbWFpbHMgb3BlbmVkLg==';
body.personalizations[0].attachments[0].name = 'personalized-file.txt';

body.personalizations[0].to = [];
body.personalizations[0].to[0] = new lib.EmailStruct();
body.personalizations[0].to[0].name = 'Nasir';
body.personalizations[0].to[0].email = 'nasir.h@notifyvisitors.com';

body.tags = ['campaign'];

const promise = controller.createGeneratethemailsendrequest(body);

promise.then((response) => {
    console.log(response);
}, (err) => {
    console.log(err);
});