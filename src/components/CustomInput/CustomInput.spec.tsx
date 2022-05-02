import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomInput from "./CustomInput";

describe("CustomInput Component", () => {
  it(" Element rendering when passing type='email' ", () => {
    const { getByTestId, getByText, queryByTestId } = render(
      <Router>
        <CustomInput type="email" handleField={() => console.log()} />
      </Router>
    );

    expect(getByText("Email")).toBeInTheDocument();
    expect(getByTestId("customInputEmail")).toBeInTheDocument();
    expect(queryByTestId("customInputPassword")).not.toBeInTheDocument();
  });

  it(" Element rendering when passing type='password' ", () => {
    const { getByTestId, getByText, queryByTestId } = render(
      <Router>
        <CustomInput type="password" handleField={() => console.log()} />
      </Router>
    );

    expect(getByText("Senha")).toBeInTheDocument();
    expect(getByTestId("customInputPassword")).toBeInTheDocument();
    expect(queryByTestId("customInputEmail")).not.toBeInTheDocument();
  });
});
