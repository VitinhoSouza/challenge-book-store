import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomInput from "../../components/CustomInput/CustomInput";
import { booksAPI } from "../../services/booksAPI";
import { useAuth } from "../../hooks/useAuth";

import logoIcon from "../../assets/noz.svg";

import "./Login.scss";

export default function Login() {
  const { auth, setAuthLS } = useAuth();
  const navigate = useNavigate();

  if (auth !== undefined && auth.token !== "null" && auth.token !== null) {
    navigate("/books");
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
      navigate("/books");
    }
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
            }}
          />
          {wrongLogin && (
            <div className="wrongLogin" title="wrongLogin">
              <div className="arrow"></div>
              Email e/ou senha incorretos.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
