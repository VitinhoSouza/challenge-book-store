import {
  queryByRole,
  queryByText,
  render,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

describe("Login Page", () => {
  it("The main elements are on canvas", () => {
    const { getByTitle } = render(<Home />);

    expect(getByTitle("appLogo")).toBeInTheDocument();
    expect(getByTitle("logoutButton")).toBeInTheDocument();
    expect(getByTitle("pagination")).toBeInTheDocument();
  });

  //   it("Logging out correctly", async () => {
  //     const { getByRole, queryByRole, unmount, rerender } = render(<Home />);

  //     const logoutButton = getByRole("logoutButton");
  //     await waitFor(() => userEvent.click(logoutButton));

  //     await waitFor(() => {
  //       expect(queryByRole("appLogo")).not.toBeInTheDocument();
  //       expect(queryByRole("logoutButton")).not.toBeInTheDocument();
  //       expect(queryByRole("pagination")).not.toBeInTheDocument();
  //     });
  //   });

  it("Go to next page", async () => {
    const { getByTitle, getByText, findByText } = render(<Home />);

    const nextPageButton = getByTitle("nextArrow");

    expect(getByText("1")).toBeInTheDocument();

    userEvent.click(nextPageButton);

    expect(await findByText("2")).toBeInTheDocument();
  });

  it("Go to next page and back", async () => {
    const { getByTitle, getByText, findByText } = render(<Home />);

    const nextPageButton = getByTitle("nextArrow");
    const previewPageButton = getByTitle("previewArrow");

    expect(getByText("1")).toBeInTheDocument();

    userEvent.click(nextPageButton);

    expect(await findByText("2")).toBeInTheDocument();

    userEvent.click(previewPageButton);

    expect(await findByText("1")).toBeInTheDocument();
  });

  //Verificar se os elementos do BookCard estão em tela

  //   it("Opening a book modal", async () => {
  //     const { getByTitle, getByText, findByText } = render(<Home />);

  //     const bookCard = getByTitle("bookCard");

  //     userEvent.click(bookCard);

  //     expect(await findByText("1")).toBeInTheDocument();
  //   });

  //Verificar se os elementos do BookModal estão em tela

  //Testar fechamento do BookModal
});
