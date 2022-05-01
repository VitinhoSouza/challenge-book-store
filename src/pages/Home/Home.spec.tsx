import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
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

  // it("Go to next page", async () => {
  //   const { getByTitle, getByText } = render(
  //     <Router>
  //       <Home />
  //     </Router>
  //   );

  //   const nextPageButton = getByTitle("nextArrow");
  //   // const valueActualPage = await findByTitle("actualPage");

  //   expect(getByText("1")).toBeInTheDocument();
  //   // expect((await findByTitle("actualPage")).children).toBe("1");

  //   userEvent.click(nextPageButton);
  //   expect(getByText("2")).toBeInTheDocument();
  // });

  // it("Go to next page and back", async () => {
  //   const { getByTitle, getByText, findByText } = render(
  //     <Router>
  //       <Home />
  //     </Router>
  //   );

  //   const nextPageButton = getByTitle("nextArrow");
  //   const previewPageButton = getByTitle("previewArrow");

  //   expect(getByText("1")).toBeInTheDocument();

  //   userEvent.click(nextPageButton);

  //   expect(await findByText("2")).toBeInTheDocument();

  //   userEvent.click(previewPageButton);

  //   expect(await findByText("1")).toBeInTheDocument();
  // });

  // it("Check if you have a BookCard and if its elements are on screen", () => {
  //   const { getAllByTitle, getAllByAltText } = render(
  //     <Router>
  //       <Home />
  //     </Router>
  //   );

  //   expect(getAllByTitle("bookCard")[0]).toBeInTheDocument();
  //   expect(getAllByAltText("book cover")[0]).toBeInTheDocument();
  //   expect(getAllByTitle("bookCardHeader")[0]).toBeInTheDocument();
  //   expect(getAllByTitle("bookCardInfo")[0]).toBeInTheDocument();
  // });

  // it("Opening modal, seeing its elements on the screen and closing it", async () => {
  //   const {
  //     // getAllByTitle,
  //     findByTitle,
  //     findByAltText,
  //     queryByTitle,
  //     queryByAltText,
  //   } = render(
  //     <Router>
  //       <Home />
  //     </Router>
  //   );

  //   const bookCard = await screen.getAllByTitle("bookCard")[0];

  //   userEvent.click(bookCard);

  //   // const getoutButton = await findByTitle("getoutButton-bookModal");
  //   const getoutButton = await screen.findByTitle("getoutButton-bookModal");

  //   expect(await findByTitle("overlayBookModal")).toBeInTheDocument();
  //   expect(getoutButton).toBeInTheDocument();
  //   expect(await findByTitle("bookModal")).toBeInTheDocument();
  //   expect(await findByAltText("book cover in the modal")).toBeInTheDocument();
  //   expect(await findByTitle("cardHeader-bookModal")).toBeInTheDocument();
  //   expect(await findByTitle("cardInfo-bookModal")).toBeInTheDocument();
  //   expect(await findByTitle("cardDescription-bookModal")).toBeInTheDocument();

  //   fireEvent(
  //     getoutButton,
  //     new MouseEvent("click", {
  //       bubbles: true,
  //       cancelable: true,
  //     })
  //   );

  //   expect(await queryByTitle("overlayBookModal")).not.toBeInTheDocument();
  //   expect(await getoutButton).not.toBeInTheDocument();
  //   expect(await queryByTitle("bookModal"));
  //   expect(
  //     await queryByAltText("book cover in the modal")
  //   ).not.toBeInTheDocument();
  //   expect(await queryByTitle("cardHeader-bookModal")).not.toBeInTheDocument();
  //   expect(await queryByTitle("cardInfo-bookModal")).not.toBeInTheDocument();
  //   expect(
  //     await queryByTitle("cardDescription-bookModal")
  //   ).not.toBeInTheDocument();
  // });
});
