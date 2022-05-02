import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomInput from "../../components/CustomInput/CustomInput";
import { booksAPI } from "../../services/booksAPI";
import { useAuth } from "../../hooks/useAuth";

import logoIcon from "../../assets/noz.svg";

import "./Login.scss";

export default function Login() {
  const { auth, setAuthLS } = useAuth();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (auth !== undefined && auth.token !== "null" && auth.token !== null) {
      navigate("/books");
    }
  }, [auth]);

  return (
    <div className="pageLogin">
      <div className="content">
        <div className="title">
          <img src={logoIcon} alt="NOZ" />
          <span>Books</span>
        </div>

        <div className="formLogin">
          <CustomInput type="email" handleField={setEmail} />
          <CustomInput
            type="password"
            handleField={setPassword}
            tryLogin={() => {
              tryLogin();
            }}
          />
          {wrongLogin && (
            <div className="wrongLogin" data-testid="wrongLogin">
              <div className="arrow"></div>
              Email e/ou senha incorretos.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
