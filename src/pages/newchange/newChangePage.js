import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

// styled components
import { Container, ContainerHeader, GreetingMsg } from "../Home/StyleHome";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";

// contexts
import { UserContext } from "../../contexts/UserContext";

// services
import { apiWallet } from "../../services/apiWallet";

export default function NewChangePage(props) {
  const { type, pageName } = props;
  const [form, setForm] = useState({ value: "", description: "" });
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  function editForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    const body = { ...form, type };
    apiWallet
      .addChangeWallet(user.token, body)
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <Container>
      <ContainerHeader>
        <GreetingMsg>{pageName}</GreetingMsg>
      </ContainerHeader>
      <StyledForm onSubmit={submitForm}>
        <StyledInput
          name="value"
          type="number"
          required
          placeholder="Valor"
          step="0.01"
          value={form.value}
          onChange={editForm}
        />
        <StyledInput
          name="description"
          type="text"
          required
          placeholder="Descrição"
          value={form.description}
          onChange={editForm}
        />
        <StyledButton type="submit">Salvar Entrada</StyledButton>
      </StyledForm>
    </Container>
  );
}
