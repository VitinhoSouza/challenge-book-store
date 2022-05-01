import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Page", () => {
  it("There must be the fields required to login", () => {
    const { getByPlaceholderText, queryByText, queryByTitle } = render(
      <Login />
    );

    expect(getByPlaceholderText("Digite seu email")).toBeInTheDocument();
    expect(getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
    expect(queryByText("Entrar")).toBeInTheDocument();
    expect(queryByTitle("wrongLogin")).not.toBeInTheDocument();
  });

  it("Login with wrong data", async () => {
    const { getByText, findByTitle } = render(<Login />);

    const sendButton = getByText("Entrar");

    userEvent.click(sendButton);
    expect(await findByTitle("wrongLogin")).toBeInTheDocument();
  });

  it("Login with correct data", () => {
    const { getByText, queryByTitle, getByPlaceholderText } = render(<Login />);

    const inputEmail = getByPlaceholderText("Digite seu email");
    const inputPassword = getByPlaceholderText("Digite sua senha");
    const sendButton = getByText("Entrar");

    userEvent.type(inputEmail, "desafio@appnoz.com.br");
    userEvent.type(inputPassword, "12341234");
    userEvent.click(sendButton);

    expect(queryByTitle("wrongLogin")).not.toBeInTheDocument();
  });
});
