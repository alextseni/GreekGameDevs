const config = require('../config');
const Mail = require('sendinblue-api');
const sendInBlueOptions = {
  apiKey: config.sendinblue.apikey /* , "timeout": 5000 */,
};
const SendInBlue = new Mail(sendInBlueOptions);

const sendEmail = data => {
  try {
    return new Promise((resolve, reject) => {
      SendInBlue.send_email(data, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  } catch (e) {
    throw e;
  }
};

module.exports = function (app, pool) {

  app.get('/api/send', (req, res) => {
    const mailOptions = {
      to: { [config.mail]: config.mail },
      from: [req.query.mail],
      subject: req.query.title,
      text: `From ${req.query.mail}: ${req.query.comment}`,
    };

    request.post(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        form: {
          secret: config.recaptcha,
          response: req.query.verification,
          remoteip: req.connection.remoteAddress,
        },
      },
      (error, response, body) => {
        body = JSON.parse(body);
        if (body.success !== undefined && !body.success) {
          return res.end('error');
        }
        sendEmail(mailOptions)
          .then(result => {
            console.log(result);
            if (result.code !== 'success') {
              return res.end('error');
            }
            return res.end('sent');
          })
          .catch(err =>
            // console.log(err)
            res.end('error')
          );
      }
    );
  });

}
