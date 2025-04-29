const usuario = {
    nome: "Maria",
    idade: 25,
    emails: [],
    adicionarEmail(novoEmail) {
      this.emails.push(novoEmail)
    },
    listarEmails() {
      this.emails.forEach(email => {
        console.log(email)
      }

      )
    }
  }

    usuario.adicionarEmail("maria@gmail.com");
    usuario.adicionarEmail("maria.trabalho@email.com");

    usuario.listarEmails();