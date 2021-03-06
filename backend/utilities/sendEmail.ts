const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  try {
    const emailOptions = {
      to: `${process.env.CLIENT_EMAIL}`,
      subject: `${subject}`,
      html: `
      <div>
        Name: ${name}
        <br />
        Email: ${email}
      </div>

      <br />

      <div>
        ${message}
      </div>
      `,
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    )

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    })

    const accessToken = oauth2Client.getAccessToken()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.CLIENT_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken,
      },
    })

    await transporter.sendMail(emailOptions)
  } catch (e) {
    console.log('Failed to send email!')
  }
}

export default sendEmail
