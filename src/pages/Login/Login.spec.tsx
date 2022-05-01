import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Page", () => {
  it("There must be the fields required to login", () => {
    const { getByPlaceholderText, queryByText, queryByTitle } = render(
      <Router>
        <Login />
      </Router>
    );

    expect(getByPlaceholderText("Digite seu email")).toBeInTheDocument();
    expect(getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
    expect(queryByText("Entrar")).toBeInTheDocument();
    expect(queryByTitle("wrongLogin")).not.toBeInTheDocument();
  });

  it("Login with wrong data", async () => {
    const { getByText, findByTitle } = render(
      <Router>
        <Login />
      </Router>
    );

    const sendButton = getByText("Entrar");

    fireEvent(
      sendButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(await findByTitle("wrongLogin")).toBeInTheDocument();
  });

  it("Login with correct data", () => {
    const { getByText, queryByTitle, getByPlaceholderText } = render(
      <Router>
        <Login />
      </Router>
    );

    const inputEmail = getByPlaceholderText("Digite seu email");
    const inputPassword = getByPlaceholderText("Digite sua senha");
    const sendButton = getByText("Entrar");

    userEvent.type(inputEmail, "desafio@appnoz.com.br");
    userEvent.type(inputPassword, "12341234");

    fireEvent(
      sendButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(queryByTitle("wrongLogin")).not.toBeInTheDocument();
  });
});
