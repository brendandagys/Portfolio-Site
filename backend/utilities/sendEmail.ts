var nodemailer = require('nodemailer')

export const sendEmail = async (
  name: string,
  subject: string,
  message: string
) => {
  let smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  let mailOptions = {
    from: `'${name}' <brendandagys@gmail.com>`,
    to: 'brendandagys@gmail.com',
    subject: `${subject}`,
    html: `
    <div>
      ${message.replace('\n', '<br />')}
    </div>
    `,
  }

  await smtpTransport.sendMail(
    mailOptions,
    (err: any, res: { response: string }) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Mail response: ' + res.response)
      }
    }
  )
}
