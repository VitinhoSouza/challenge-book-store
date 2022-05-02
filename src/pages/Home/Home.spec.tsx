import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

describe("Home Page", () => {
  it("The main elements are on canvas", () => {
    const { getByTitle } = render(
      <Router>
        <Home />
      </Router>
    );

    expect(getByTitle("appLogo")).toBeInTheDocument();
    expect(getByTitle("logoutButton")).toBeInTheDocument();
    expect(getByTitle("pagination")).toBeInTheDocument();
  });

  // Show BookCard: Request for API

  // Logout: 2 Components

  // Open and Close CardModal: Request for API

  // NextPage and PreviewPage: Request for API
});
