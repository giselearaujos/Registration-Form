import { Container, Typography } from "@material-ui/core";
import From from "./components/Form";

import "@fontsource/roboto/500.css";

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h4" component="h4" align="center">
        Cadastre-se
      </Typography>
      <From sendForm={sendForm} validCpf={validCpf} />
    </Container>
  );
}

function sendForm(data) {
  console.log(data);
}

function validCpf(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "CPF precisa ter 11 dígitos" };
  }
  return { valid: true, text: "" };
}

export default App;
