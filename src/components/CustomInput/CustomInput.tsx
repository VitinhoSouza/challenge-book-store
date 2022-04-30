/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import "./CustomInput.scss";

interface CustomInputProps {
  type: "email" | "password";
  tryLogin?: () => void;
  handleEmail?: (email: string) => void;
  handlePassword?: (password: string) => void;
}

function inputEmail(handleEmail: ((email: string) => void) | undefined) {
  return (
    <div className="containerInput">
      <span>Email</span>
      {handleEmail !== undefined && (
        <input
          type="email"
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
          placeholder="Digite sua senha"
          onChange={(e) => handlePassword(e.target.value)}
        />
      )}
      {tryLogin !== undefined && (
        <div className="buttonSend" onClick={tryLogin}>
          Entrar
        </div>
      )}
    </div>
  );
}

export default function CustomInput({
  type,
  handleEmail,
  handlePassword,
  tryLogin,
}: CustomInputProps) {
  switch (type) {
    case "email":
      return inputEmail(handleEmail);
    case "password":
      return inputPassword(handlePassword, tryLogin);
    default:
      return <>ErrorType</>;
  }
}
