import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Page", () => {
  it("There must be the fields required to login", () => {
    const { getByPlaceholderText, queryByText } = render(<Login />);

    expect(getByPlaceholderText("Digite seu email")).toBeInTheDocument();
    expect(getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
    expect(queryByText("Enviar")).toBeInTheDocument();
    expect(queryByText("Email e/ou senha incorretos.")).not.toBeInTheDocument();
  });

  it("Login with correct data", () => {
    const { getByPlaceholderText, queryByText } = render(<Login />);

    expect(getByPlaceholderText("Digite seu email")).toBeInTheDocument();
    expect(getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
    expect(queryByText("Enviar")).toBeInTheDocument();
    expect(queryByText("Email e/ou senha incorretos.")).not.toBeInTheDocument();
  });
});
