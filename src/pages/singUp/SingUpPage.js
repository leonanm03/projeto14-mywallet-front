import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

// services
import apiAuth from "../../services/apiAuth";

// styled components
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";
import StyledContainer from "../../components/StyledContainer";
import StyledTitle from "../../components/StyledTitle";

export default function SingUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    //body without "confirmPassword"
    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    apiAuth
      .singUp(body)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  function editForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <StyledContainer>
      <StyledTitle>MyWallet</StyledTitle>
      <StyledForm onSubmit={submitForm}>
        <StyledInput
          name="name"
          value={form.name}
          required
          type="text"
          placeholder="Name"
          onChange={editForm}
        />
        <StyledInput
          name="email"
          value={form.email}
          required
          type="email"
          placeholder="E-mail"
          onChange={editForm}
        />
        <StyledInput
          name="password"
          value={form.password}
          required
          type="password"
          placeholder="Password"
          onChange={editForm}
        />
        <StyledInput
          name="confirmPassword"
          value={form.confirmPassword}
          required
          type="password"
          placeholder="Confirm Password"
          onChange={editForm}
        />
        <StyledButton type="submit">Sign Up</StyledButton>
      </StyledForm>

      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </StyledContainer>
  );
}
