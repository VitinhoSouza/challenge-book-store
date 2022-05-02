import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Page", () => {
  it("There must be the fields required to login", () => {
    const { getByTestId, queryByTestId } = render(
      <Router>
        <Login />
      </Router>
    );

    expect(getByTestId("customInputEmail")).toBeInTheDocument();
    expect(getByTestId("customInputPassword")).toBeInTheDocument();
    expect(getByTestId("customInputButtonSend")).toBeInTheDocument();
    expect(queryByTestId("wrongLogin")).not.toBeInTheDocument();
  });

  it("Attempt to login without filling any fields", async () => {
    const { getByTestId, findByTestId } = render(
      <Router>
        <Login />
      </Router>
    );

    const sendButton = getByTestId("customInputButtonSend");

    userEvent.click(sendButton);

    expect(await findByTestId("wrongLogin")).toBeInTheDocument();
  });

  it("Try logging in by filling in the two wrong fields", async () => {
    const { getByTestId, findByTestId } = render(
      <Router>
        <Login />
      </Router>
    );

    const inputEmail = getByTestId("customInputEmail");
    const inputPassword = getByTestId("customInputPassword");
    const sendButton = getByTestId("customInputButtonSend");

    userEvent.type(inputEmail, "user@teste.com.br");
    userEvent.type(inputPassword, "xxxxxxxx");

    userEvent.click(sendButton);

    expect(await findByTestId("wrongLogin")).toBeInTheDocument();
  });

  it("Try logging in by filling in the wrong email", async () => {
    const { getByTestId, findByTestId } = render(
      <Router>
        <Login />
      </Router>
    );

    const inputEmail = getByTestId("customInputEmail");
    const inputPassword = getByTestId("customInputPassword");
    const sendButton = getByTestId("customInputButtonSend");

    userEvent.type(inputEmail, "user@teste.com.br");
    userEvent.type(inputPassword, "12341234");

    userEvent.click(sendButton);

    expect(await findByTestId("wrongLogin")).toBeInTheDocument();
  });

  it("Try logging in by filling in the wrong password", async () => {
    const { getByTestId, findByTestId } = render(
      <Router>
        <Login />
      </Router>
    );

    const inputEmail = getByTestId("customInputEmail");
    const inputPassword = getByTestId("customInputPassword");
    const sendButton = getByTestId("customInputButtonSend");

    userEvent.type(inputEmail, "desafio@appnoz.com.br");
    userEvent.type(inputPassword, "xxxxxx");

    userEvent.click(sendButton);

    expect(await findByTestId("wrongLogin")).toBeInTheDocument();
  });

  it("Login with correct data", () => {
    const { getByTestId, queryByTestId } = render(
      <Router>
        <Login />
      </Router>
    );

    const inputEmail = getByTestId("customInputEmail");
    const inputPassword = getByTestId("customInputPassword");
    const sendButton = getByTestId("customInputButtonSend");

    userEvent.type(inputEmail, "desafio@appnoz.com.br");
    userEvent.type(inputPassword, "12341234");

    userEvent.click(sendButton);
    expect(queryByTestId("wrongLogin")).not.toBeInTheDocument();
  });
});
