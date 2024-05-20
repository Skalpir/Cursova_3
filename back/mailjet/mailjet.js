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

const sendEmail = async () => {

const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "kovach.andrii1@student.uzhnu.edu.ua",
                Name: "Mailjet Pilot"
              },
              To: [
                {
                  Email: "andryxa1049@gmail.com",
                  Name: "passenger 1"
                }
              ],
              Subject: "Your email flight plan!",
              TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
              HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
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