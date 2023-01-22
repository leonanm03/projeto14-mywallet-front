import {
  Container,
  ContainerBtns,
  Btn,
  LogBox,
  ContainerHeader,
  GreetingMsg,
  Change,
  ContainerSaldo,
} from "./StyleHome";
import Logo from "../../assets/VectorOut.svg";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { apiWallet } from "../../services/apiWallet";

export default function HomePage() {
  const { user } = useContext(UserContext);
  const [userWallet, setUserWallet] = useState({
    name: "",
    balance: 0,
    changes: [],
  });

  function getWalletList() {
    apiWallet
      .getWallet(user.token)
      .then((res) => {
        console.log("Resposta do Servidor:", res.data);
        setUserWallet(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  useEffect(getWalletList, [user.token]);
  console.log(userWallet.changes);

  return (
    <Container>
      <ContainerHeader>
        <GreetingMsg>Olá, {user.name}</GreetingMsg>
        <Link to="/">
          <img src={Logo} alt="Logo MyWallet" />
        </Link>
      </ContainerHeader>
      <LogBox>
        {userWallet.changes.length > 0 ? (
          <>
            {userWallet.changes.map((change, index) => (
              <Change key={index} type={change.type}>
                <span className="myclass">
                  {change.date}
                  <span className="description"> {change.description} </span>
                </span>
                <span className="inOut"> {change.value} </span>
              </Change>
            ))}

            <ContainerSaldo value={userWallet.balance}>
              <span className="saldoTxt">SALDO</span>
              <span className="saldoVal">{userWallet.balance}</span>
            </ContainerSaldo>
          </>
        ) : (
          <h1>Não há registros de entrada ou saída</h1>
        )}
      </LogBox>
      <ContainerBtns>
        <Btn to="/nova-entrada">
          <img src={Plus} alt="Botão de adicionar" />
          Nova <br />
          Entrada
        </Btn>

        <Btn to="/nova-saida">
          <img src={Minus} alt="Botão de retirar" />
          Nova <br />
          Saída
        </Btn>
      </ContainerBtns>
    </Container>
  );
}
