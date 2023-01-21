import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #8c11be;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 412px;
  padding: 25px 25px;
  position: relative;
`;
export const ContainerBtns = styled.div`
  display: flex;
  width: 100%;
  height: 114px;
  justify-content: space-between;
  margin-top: 13px;
`;

export const Btn = styled(Link)`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 9px 9px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
`;

export const LogBox = styled.div`
  width: 100%;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  padding-top: 23px;
  color: #868686;
  position: relative;
`;

export const ContainerSaldo = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 5px;

  .saldoTxt {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }

  .saldoVal {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    /* identical to box height */

    text-align: right;

    color: ${(props) => (props.userBalance > 0 ? "#03ac00" : "#c70000")};
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: calc(100%);
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 13px;
  background-color: #8c11be;
`;

export const GreetingMsg = styled.h1`
  color: #fff;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
`;

export const Change = styled.div`
  width: calc(100% - 40px);
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .inOut {
    color: ${(props) => (props.type === "income" ? "#03ac00" : "#c70000")};
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
  }

  .description {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-left: 5px;
  }

  .date {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }
`;
