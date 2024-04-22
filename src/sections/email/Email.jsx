import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Email.module.css";
import Input from "../../components/input/Input";
import loadingGif from "../../assets/icons/loading.gif";

function Email() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_gcuekwb",
        "template_b2tr5c4",
        templateParams,
        "3JxSFD4sJNNNeD7kH"
      )
      .then(
        (res) => {
          alert("Email Enviado", res.status, res.text);
          setName("");
          setMessage("");
          setEmail("");
          setSending(false);
        },
        (err) => {
          alert("Eita lêlê", err);
          setSending(false);
        }
      );
  }

  return (
    <div className="container">
      <h1 className={styles.title}>Tire suas dúvidas</h1>

      <form className={styles.form} onSubmit={sendEmail}>
        <Input
          placeHolder="Nome"
          width="70%"
          padding="2%"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          placeHolder="E-mail"
          width="70%"
          padding="2%"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className={styles.textArea}
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />
        <input
          className={styles.button}
          type="submit"
          value="Enviar"
          disabled={sending}
        />
        {sending && (
          <img
            src={loadingGif}
            alt="Carregando..."
            className={styles.loadingGif}
          />
        )}{" "}
      </form>
    </div>
  );
}

export default Email;
