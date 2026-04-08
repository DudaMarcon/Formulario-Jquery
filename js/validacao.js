
$("#formExemplo").validate({
    
  rules: {
    txtnome: {
      required: true,
      minlength: 2
    },

    txtemail: {
      required: true,
      email: true
    },

    txtidade: {
      required: true,
      min: 18,
      max: 65
    },

    txttelefone: {
      required: true,
      minlength: 10
    },

    txtcpf: {
      required: true,
      minlength: 11
    },

    txtarea: {
      required: true
    },

    txtexperiencia: {
      required: true,
      minlength: 20
    },

    txtsenha: {
      required: true,
      minlength: 6
    },

    txtconfirmar: {
      required: true,
      equalTo: "#txtsenha"
    }
  },

  messages: {
    txtnome: {
      required: "Digite seu nome",
      minlength: "Mínimo 2 caracteres"
    },

    txtemail: {
      required: "Digite seu email",
      email: "Email inválido"
    },

    txtidade: {
      required: "Digite sua idade",
      min: "Idade mínima é 18",
      max: "Idade máxima é 65"
    },

    txttelefone: {
      required: "Digite seu telefone",
      minlength: "Telefone inválido"
    },

    txtcpf: {
      required: "Digite seu CPF",
      minlength: "CPF inválido"
    },

    txtarea: {
      required: "Digite sua área de interesse"
    },

    txtexperiencia: {
      required: "Descreva sua experiência",
      minlength: "Mínimo 20 caracteres"
    },

    txtsenha: {
      required: "Digite uma senha",
      minlength: "Mínimo 6 caracteres"
    },

    txtconfirmar: {
      required: "Confirme a senha",
      equalTo: "As senhas não coincidem"
    }

  }
});
