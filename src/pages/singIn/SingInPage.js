import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

// styled components
import StyledContainer from "../../components/StyledContainer";
import StyledTitle from "../../components/StyledTitle";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";

// services
import apiAuth from "../../services/apiAuth";

export default function SingInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function editForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();

    apiAuth
      .singIn(form)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <StyledContainer>
      <StyledTitle>MyWallet</StyledTitle>
      <StyledForm onSubmit={submitForm}>
        <StyledInput
          name="email"
          type="email"
          required
          placeholder="Username"
          value={form.email}
          onChange={editForm}
        />
        <StyledInput
          name="password"
          type="password"
          required
          placeholder="Password"
          value={form.password}
          onChange={editForm}
        />
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>

      <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
    </StyledContainer>
  );
}
