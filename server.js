const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Configurar o transporte SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kathelievarinhas@gmail.com", // Insira seu e-mail aqui
      pass: "Bk@._1998", // Insira sua senha aqui
    },
  });

  // Definir opções de e-mail
  const mailOptions = {
    from: "kathelievarinhas@gmail.com",
    to: "kathelievarinhas@gmail.com", // Insira o e-mail do destinatário aqui
    subject: "Contato Site",
    text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
  };

  // Enviar e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erro ao enviar e-mail");
    } else {
      console.log("Email enviado: " + info.response);
      res.status(200).send("E-mail enviado com sucesso");
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
