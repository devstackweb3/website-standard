import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  try {
    const {
      montant_du_credit: amount,
      duree_en_mois: time,
      nom: surname,
      prenom: name,
      naissance: birth,
      rue: road,
      numero: number,
      codepostal: NIP,
      localite: state,
      email: email,
      informations_juridiques: juridicCheckbox,
      acceptationCGU: CGU,
      acceptationConsultation: consultation,
    } = req.body;
    console.log(req.body);
    console.log(amount);
    const User = process.env.USER_MAIL;
    const Pass = process.env.APP_PASSWORD;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "custom",
        user: User, //your gmail account you used to set the project up in google cloud console"
        pass: Pass,
      },
    });
    console.log("sending mail");
    const mail = await transporter.sendMail({
      from: User,
      to: "1887she@gmail.com", //'info@gocredit.ch',
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
    });

    return res.status(200).json({ message: mail });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Could not send the email. Message not sent" });
  }

  return res.status(200).json({ message: "success" });
}
