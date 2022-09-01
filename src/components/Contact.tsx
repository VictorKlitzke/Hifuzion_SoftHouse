import React from "react";

import "./Contact.css";

const Contact = () => {
  const DataContato = [
    {
      Text: "Entre em Contato conosco",
      subText: "Venha fazer parte do Hifuzion",
      fone: "(65) 9992-7479",
      cidade: "Sapezal - MT",
      Email: "administrativo@hifuzion.com.br",
      end: "Av. Rotary Internacional, 659 - Centro",
    },
  ];

  const sendWa = (e) => {
    e.preventDefault();

    const el = e.target.elements;
    const data = {
      name: el.name.value,
      company: el.company.value,
      email: el.email.value,
      message: el.message.value.replace(" ", ""),
    };

    window
      .open(
        `https://api.whatsapp.com/send/?phone=556599927479&text=Cliente%3A+${
          data.name
        }%0D%0AEmpresa%3A+${data.company}${
          data.message != "" ? `%0D%0AMensagem%3A+${data.message}` : ""
        }&app_absent=1`,
        "_blank"
      )
      .focus();
  };

  return (
    <>
      {DataContato.map((obj, i) => (
        <section key={i} className="">
          <div className="center">
            <div className="title">
              <h1>{obj.Text}</h1>
              <h2>{obj.subText}</h2>
            </div>
            <div className="content-contato">
              <div className="form-contato">
                <form onSubmit={sendWa}>
                  <div className="row">
                    <div className="input50">
                      <input
                        type="text"
                        placeholder="Nome"
                        name="name"
                        required
                      />
                    </div>
                    <div className="input50">
                      <input
                        type="text"
                        placeholder="Empresa"
                        name="company"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input50">
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input100">
                      <textarea
                        placeholder="Mensagem"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input100">
                      <input type="submit" value="Enviar" name="acao" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="contato-info">
                <div className="info-box">
                  <div className="detalhes">
                    <h3>Endereço</h3>
                    <h4 className="text-white">{obj.cidade}</h4>
                  </div>
                </div>
                <div className="info-box">
                  <div className="detalhes">
                    <h3>Endereço</h3>
                    <p>{obj.end}</p>
                  </div>
                </div>
                <div className="info-box">
                  <div className="detalhes">
                    <h3>Email</h3>
                    <p>{obj.Email}</p>
                  </div>
                </div>
                <div className="info-box">
                  <div className="detalhes">
                    <h3>Telefone</h3>
                    <p>{obj.fone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Contact;
