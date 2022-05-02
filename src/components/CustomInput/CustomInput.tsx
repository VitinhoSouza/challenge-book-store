/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import "./CustomInput.scss";

interface CustomInputProps {
  type: "email" | "password";
  tryLogin?: () => void;
  handleField: (field: string) => void;
}

function inputEmail(handleEmail: ((email: string) => void) | undefined) {
  return (
    <div className="containerInput">
      <span>Email</span>
      {handleEmail !== undefined && (
        <input
          type="email"
          data-testid="customInputEmail"
          placeholder="Digite seu email"
          onChange={(e) => handleEmail(e.target.value)}
        />
      )}
    </div>
  );
}

function inputPassword(
  handlePassword: ((password: string) => void) | undefined,
  tryLogin: (() => void) | undefined
) {
  return (
    <div className="containerInput">
      <span>Senha</span>
      {handlePassword !== undefined && (
        <input
          type="password"
          data-testid="customInputPassword"
          placeholder="Digite sua senha"
          onChange={(e) => handlePassword(e.target.value)}
        />
      )}
      {tryLogin !== undefined && (
        <div
          className="buttonSend"
          onClick={tryLogin}
          data-testid="customInputButtonSend"
        >
          Entrar
        </div>
      )}
    </div>
  );
}

export default function CustomInput({
  type,
  handleField,
  tryLogin,
}: CustomInputProps) {
  switch (type) {
    case "email":
      return inputEmail(handleField);
    case "password":
      return inputPassword(handleField, tryLogin);
    default:
      return <>ErrorType</>;
  }
}
