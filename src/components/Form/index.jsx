import { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function Form({ sendForm, validCpf }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotion, setPromotion] = useState(true);
  const [news, setNews] = useState(true);

  const [error, setError] = useState({
    cpf: {
      valid: true,
      text: "",
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendForm({ name, lastName, cpf, promotion, news });
      }}
    >
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="last-name"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        onBlur={(event) => {
          setError({ cpf: validCpf(cpf) });
        }}
        error={!error.cpf.valid}
        helperText={error.cpf.text}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
      />

      <FormControlLabel
        control={
          <Switch
            name="promotion"
            color="primary"
            checked={promotion}
            onChange={(event) => {
              setPromotion(event.target.checked);
            }}
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            name="news"
            color="primary"
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
          />
        }
        label="Novidades"
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default Form;
