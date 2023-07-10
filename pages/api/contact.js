import nodemailer from 'nodemailer'

export default async function ContactAPI(reg, res) {
  const {
    amount,
    time,
    surname,
    name,
    birth,
    road,
    number,
    NIP,
    state,
    email,
    juridicCheckbox,
    CGU,
    consultation,
  } = req.body

  const User = process.env.USER_MAIL
  const Pass = process.env.USER_PASSWORD

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // SMTP over SSL/TLS is required for Gmail accounts
    secure: true,
    auth: {
      user: User,
      pass: Pass,
    },
  })

  try {
    const mail = await transporter.sendMail({
      from: User,
      to: 'info@gocredit.ch',
      subject: `ETAPE 1 | Demande d'informations (Acquisition Crédit) ${name}`,
      html: `
        <p>amount: ${amount}</p>
        <p>time: ${time} </p>
        <p>surname: ${surname} </p>
        <p>name: ${name} </p>
        <p>birth: ${birth} </p>
        <p>road: ${road} </p>
        <p>number: ${number} </p>
        <p>NIP: ${NIP} </p>
        <p>state: ${state} </p>
        <p>email: ${email} </p>
        <p>Acceptation Infos Juridiques: ${juridicCheckbox} </p>
        <p>Acceptation CGU: ${CGU} </p>
        <p>Consultation Gratuite: ${consultation} </p>`,
      replyTo: email,
    })

    return res.status(200).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Could not send the email. Message not sent' })
  }

  return res.status(200).json({ message: 'success' })
}
