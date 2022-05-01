import { useState } from "react";

import CustomInput from "../../components/CustomInput/CustomInput";
import { booksAPI } from "../../services/booksAPI";
import { useAuth } from "../../hooks/useAuth";
import history from "../../history";

import logoIcon from "../../assets/noz.svg";

import "./Login.scss";

export default function Login() {
  const { auth, setAuthLS } = useAuth();

  if (auth !== undefined && auth.token !== "null" && auth.token !== null) {
    history.push("/books");
    window.location.reload();
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongLogin, setWrongLogin] = useState(false);

  async function tryLogin() {
    const res = await booksAPI.signin({ email, password });
    if (res.token === "invalid") {
      setWrongLogin(true);
    } else {
      setWrongLogin(false);
      setAuthLS(res);
      history.push("/books");
      window.location.reload();
    }
  }

  async function tryRefreshToken() {
    const res = await booksAPI.refreshToken(
      auth.token !== null ? auth.token : ""
    );
    console.log(res);
    // history.push("/");
  }

  return (
    <div className="pageLogin">
      <div className="content">
        <div className="title">
          <img src={logoIcon} alt="NOZ" />
          <span>Books</span>
        </div>

        <div className="formLogin">
          <CustomInput type="email" handleEmail={setEmail} />
          <CustomInput
            type="password"
            handlePassword={setPassword}
            tryLogin={() => {
              tryLogin();
              tryRefreshToken();
            }}
          />
          {wrongLogin && (
            <div className="wrongLogin">Email e/ou senha incorretos.</div>
          )}
        </div>
      </div>
    </div>
  );
}
