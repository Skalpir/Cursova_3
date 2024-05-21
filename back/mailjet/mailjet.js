/**
 *
 * Run:
 *
 */

const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
    "90683d05d08cbbc21c2fdaf5eaf87bad",
    "b34449c5454fbc1a70a812d918ab916b",
);

const sendEmail = async (toName,email) => {

  const personalizedText = `Доброго дня ${toName}, хочемо вам нагадати що у вас запланована завтра зустріч у нашій клініці, будь ласка не забудте з'явитись на процедуру`

const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "kovach.andrii1@student.uzhnu.edu.ua",
                Name: "Hospital notification"
              },
              To: [
                {
                  Email: email,
                  Name: personalizedText
                }
              ],
              Subject: "У вас незабаром зустріч у нашій клініці",
              //TextPart: "Доброго дня , хочемо вам нагадати що у вас запланована завтра зустріч у нашій клініці, будь ласка не забудте з'явитись на процедуру",
              //TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
              //HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</ h3><br />May the delivery force be with you!"
              HTMLPart: `<h3>Наша клініка <a href=\"https://www.google.com/\"> Клініка </a>!</h3>  <br /> <b> ${personalizedText} <b/>`,
            }
          ]
        })

request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
}

module.exports = {
    sendEmail : sendEmail
};